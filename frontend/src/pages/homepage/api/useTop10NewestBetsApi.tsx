import { useQuery } from "@tanstack/react-query";
import type { components } from "@/types/generatedTypes";
import { API_ENDPOINTS } from "@/lib/endpoints";

type TNewestBetsResponse = components["schemas"]["CreateBetDto"];

const URL = import.meta.env.VITE_API_BASE_URL

const useTop10NewestBetsApi = () => {
  const fetchTop10NewestBets = async (): Promise<Array<TNewestBetsResponse>> => {

    const response = await fetch(`${URL}${API_ENDPOINTS.GET_NEWEST_BETS}`)
    //await new Promise((resolve) => setTimeout(resolve, 3000));

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const { data, error, isError, isLoading } = useQuery({
    gcTime: 60 * 1000, // 1 minute
    queryFn: fetchTop10NewestBets,
    queryKey: ["top10newestbets"],
    retryOnMount: true,
  });

  return { data, error, isError, isLoading };
};

export default useTop10NewestBetsApi;
