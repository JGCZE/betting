import { Link } from "@tanstack/react-router"
import InfiniteScroll from "react-infinite-scroll-component";
import BetCardSkeleton from "@/components/ui/betCardSkeleton";
import { Route } from "@/routes/index";
import useAllBetsApi from "../api/useAllBetsApi";
import BetCard from "./BetCard/BetCard";


const AllBets = () => {
  const { cat: category } = Route.useSearch();

  const { data, error, fetchNextPage, hasNextPage, isLoading } = useAllBetsApi(category);

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Došlo k chybě při načítání sázek.
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4 p-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <BetCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      endMessage={
        <p className="text-center py-4 text-navy-400">To je vše, žádné další sázky.</p>
      }
      hasMore={hasNextPage}
      loader={
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4 p-4">
          <BetCardSkeleton />
        </div>
      }
      next={fetchNextPage}
      scrollThreshold={0.99}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4 p-4">
        {data.map((bet) => (
          <Link
            className="bg-navy-800 rounded-2xl border-2 border-navy-700 hover:bg-navy-700 shadow-2xl"
            key={bet._id}
            params={{ betUrl: bet.betUrl }}
            to="/bets/$betUrl"
          >
            <BetCard bet={bet} />
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default AllBets;
