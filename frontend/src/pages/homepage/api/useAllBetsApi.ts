import { useInfiniteQuery } from "@tanstack/react-query";
import type { components } from "@/types/generatedTypes";
import { httpGetRequest } from "@/api/httpClient";
import { API_ENDPOINTS } from "@/lib/endpoints";

export type TAllBets = components["schemas"]["GetBetsHomePageDto"];

const LIMIT = 36

interface IReturn {
  data?: Array<TAllBets>;
  error: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isLoading: boolean;
}

const useAllBetsApi = (): IReturn => {
  const fetchProjects = async ({ pageParam }: { pageParam: number }) => {
    try {
      const res = await httpGetRequest<Array<TAllBets>>(
        `${API_ENDPOINTS.GET_NEWEST_BETS}?pageXXX=${pageParam}&limit=${LIMIT}`
      );

      if (!res || !res.length) {
        throw new Error("No bets found");
      }

      return res;
    } catch (error) {
      console.error("Error fetching bets:", error);
      throw error;
    }
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isError: error,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    getNextPageParam: (lastPage, allPages) => {

      if (!Array.isArray(lastPage)) {
        return undefined;
      }

      return lastPage?.length < LIMIT ? undefined : allPages.length;
    },
    initialPageParam: 1,
    queryFn: fetchProjects,
    queryKey: ["fetchAllBetsInfinite"],
  });

  const dataFormatted = data?.pages
    .flatMap(page => page)
    
  return {
    data: dataFormatted,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading
  }
};

export default useAllBetsApi;
