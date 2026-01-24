import { useQuery } from "@tanstack/react-query";
import type { components } from "@/types/generatedTypes";
import { httpGetRequest } from "@/api/httpClient";
import { API_ENDPOINTS } from "@/lib/endpoints";

export type TAllBets = components["schemas"]["GetBetsHomePageDto"];

const useAllBetsApi = () => {
  const { data, error, isError, isLoading } = useQuery({
    gcTime: 60 * 1000 * 5, // 5 minut
    queryFn: () => httpGetRequest<Array<TAllBets>>(API_ENDPOINTS.GET_NEWEST_BETS),
    queryKey: ["fetchAllBets"],
    retryOnMount: true,
    staleTime: 60 * 1000, // 1 minuta
  });

  return { data, error, isError, isLoading };
};

export default useAllBetsApi;
