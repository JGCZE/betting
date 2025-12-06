import { useSuspenseQuery } from "@tanstack/react-query";
import type { components } from "@/types/generatedTypes";

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

  const { data, error, isError, isPending } = useSuspenseQuery({
    queryFn: fetchTop15NewestBets,
    queryKey: ["top15newestbets"],
  });

  return { data, error, isError, isPending };
};

export default useTop15NewestBetsApi;
