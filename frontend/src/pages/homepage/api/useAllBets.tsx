import { useQuery } from "@tanstack/react-query";
import type { components } from "@/types/generatedTypes";
import { API_ENDPOINTS } from "@/lib/endpoints";

export type TAllBets = components["schemas"]["CreateBetDto"];

const URL = import.meta.env.VITE_API_BASE_URL

const useAllBets = () => {
  const fetchAllBets = async (): Promise<Array<TAllBets>> => {

    const response = await fetch(`${URL}${API_ENDPOINTS.GET_NEWEST_BETS}`)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const { data, error, isError, isLoading } = useQuery({
    gcTime: 60 * 1000, // 1 minute
    queryFn: fetchAllBets,
    queryKey: ["fetchAllBets"],
    retryOnMount: true,
  });

  return { data, error, isError, isLoading };
};

export default useAllBets;
