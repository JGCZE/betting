import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import type { components } from "@/types/generatedTypes";
import { httpGetRequest } from "@/api/httpClient";
import { API_ENDPOINTS } from "@/lib/endpoints";

export type TAllBets = components["schemas"]["GetBetsHomePageDto"];

const useAllBetsApi = () => {
  /* const { data, error, isError, isLoading } = useQuery({
    //gcTime: 60 * 1000 * 5, // 5 minut
    queryFn: () => httpGetRequest<Array<TAllBets>>(API_ENDPOINTS.GET_NEWEST_BETS),
    queryKey: ["fetchAllBets"],
    retryOnMount: true,
    //staleTime: 60 * 1000, // 1 minuta
  }); */

  const fetchProjects = async ({ pageParam }) => {
    console.log("PAGE PARAM: >>", pageParam);
    const limit = 6;

    const res = await httpGetRequest<Array<TAllBets>>(
      `${API_ENDPOINTS.GET_NEWEST_BETS}?page=${pageParam}&limit=${limit}`
    );

    return res;
  };

  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    getNextPageParam: (lastPage, pages) => {
      const limit = 6;
      
      return lastPage.length < limit ? undefined : pages.length;
    },
    initialPageParam: 0,
    queryFn: fetchProjects,
    queryKey: ["fetchAllBetsInfinite"],
  });

  const dataFormatted = data?.pages.flatMap(page => page);

  return { data: dataFormatted, fetchNextPage, hasNextPage, loading: false }

  //return { data, error, isError, isLoading };
};

export default useAllBetsApi;
