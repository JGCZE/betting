import { Link } from "@tanstack/react-router"
import InfiniteScroll from "react-infinite-scroll-component";
import BetCardSkeleton from "@/components/ui/betCardSkeleton";
import { Route } from "@/routes/index";
import useAllBetsApi from "../api/useAllBetsApi";
import BetCard from "./BetCard/BetCard";
import HomePageStates from "./HomePageStates/HomePageStates";


const AllBets = () => {
  const { cat: category } = Route.useSearch();
  const { data, error, fetchNextPage, hasNextPage, isLoading } = useAllBetsApi(category);

  if (error || isLoading || data?.length === 0) {
    return (
      <HomePageStates
        category={category}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    )
  }

  return !!data && (
    <>
      <h2 className="font-bold text-2xl mt-6">Areny</h2>

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
              className="bg-navy-800 rounded-2xl border-2 border-navy-700 hover:bg-navy-700 shadow-2xl max-w-96"
              key={bet._id}
              params={{ betUrl: bet.betUrl }}
              to="/bets/$betUrl"
            >
              <BetCard bet={bet} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </>
  )
}

export default AllBets;
