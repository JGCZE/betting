import type { components } from "@/types/generatedTypes";
import { useSuspenseQuery } from "@tanstack/react-query";

type TNewestBetsResponse = components["schemas"]["Bet"];

const useTop15NewestBetsApi = () => {
  const fetchTop15NewestBets = async (): Promise<TNewestBetsResponse> => {
    // just for testing, using a public API
    const response = await fetch("http://localhost:5001/api/bets/newest");

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const { isPending, isError, data, error } = useSuspenseQuery({
    queryKey: ["top15newestbets"],
    queryFn: fetchTop15NewestBets,
  });

  return { isPending, isError, data, error };
};

export default useTop15NewestBetsApi;
