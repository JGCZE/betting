import { Link } from "@tanstack/react-router"
import BetCardSkeleton from "@/components/ui/betCardSkeleton";
import useAllBetsApi from "../api/useAllBetsApi";
import BetCard from "./BetCard/BetCard";

const AllBets = () => {
  const { data, isLoading } = useAllBetsApi();

  if (isLoading) {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4 p-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <BetCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4 p-4">
      {data?.map(((bet, index) => (
        <Link
          className="block h-full bg-gray-700 rounded-2xl border-2 hover:bg-gray-600 shadow-2xl"
          key={index}
          // params={{ betUrl }}
          to={`/bets/${bet.betUrl}`}
        >
          <BetCard bet={bet} />
        </Link>
      )
      ))}
    </div>
  )
}

export default AllBets;
