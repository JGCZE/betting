import { useMutation } from "@tanstack/react-query"
import type { TBetFormData } from "../MakeBet"

const useMakeBetApi = () => {
  const mutation = useMutation({
    mutationFn: async (newBet: TBetFormData) => {
      const response = await fetch('http://localhost:5001/api/bet', {
        body: JSON.stringify(newBet),
        headers: { 'Content-Type': 'application/json' },
        method: "POST"
      })

      if (!response.ok) {
        throw new Error("Fail to create bet")
      }

      return response.json();
    }
  })

  return { mutation }
}

export default useMakeBetApi
