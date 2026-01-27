import { useInfiniteQuery } from "@tanstack/react-query";
import type { components } from "@/types/generatedTypes";
import { httpGetRequest } from "@/api/httpClient";
import { API_ENDPOINTS } from "@/lib/endpoints";

export type TAllBets = components["schemas"]["GetBetsHomePageDto"];

const LIMIT = 36

const useAllBetsApi = () => {
  /* const { data, error, isError, isLoading } = useQuery({
    //gcTime: 60 * 1000 * 5, // 5 minut
    queryFn: () => httpGetRequest<Array<TAllBets>>(API_ENDPOINTS.GET_NEWEST_BETS),
    queryKey: ["fetchAllBets"],
    retryOnMount: true,
    //staleTime: 60 * 1000, // 1 minuta
  }); */

  const fetchProjects = async ({ pageParam }: { pageParam: number }) => {
    console.log("PAGE PARAM: >>", pageParam);

    const res = await httpGetRequest<Array<TAllBets>>(
      `${API_ENDPOINTS.GET_NEWEST_BETS}?page=${pageParam}&limit=${LIMIT}`
    );

    return res;
  };

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {

      console.log("allPages", allPages)
      console.log("lastPageParam", lastPageParam)
      console.log("allPageParams", allPageParams)

      return lastPage?.length < LIMIT ? undefined : allPages.length;
    },
    initialPageParam: 1,
    queryFn: fetchProjects,
    queryKey: ["fetchAllBetsInfinite"],
  });

  const dataFormatted = data?.pages.flatMap(page => page);

  return {
    data: dataFormatted,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading
  }

  //return { data, error, isError, isLoading };
};

export default useAllBetsApi;
