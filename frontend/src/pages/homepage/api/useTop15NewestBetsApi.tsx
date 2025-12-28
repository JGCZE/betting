import { useSuspenseQuery } from "@tanstack/react-query";
import type { components } from "@/types/generatedTypes";
import { API_ENDPOINTS } from "@/lib/endpoints";

type TNewestBetsResponse = components["schemas"]["Bet"];

const URL = import.meta.env.VITE_API_BASE_URL

const useTop15NewestBetsApi = () => {
  const fetchTop15NewestBets = async (): Promise<TNewestBetsResponse> => {

    const response = await fetch(`${URL}${API_ENDPOINTS.GET_NEWEST_BETS}`)
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const { data, error, isError, isPending } = useSuspenseQuery({
    queryFn: fetchTop15NewestBets,
    queryKey: ["top15newestbets"],
  });

  return { data, error, isError, isPending };
};

export default useTop15NewestBetsApi;
