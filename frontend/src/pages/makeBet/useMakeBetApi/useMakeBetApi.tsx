import { useMutation } from "@tanstack/react-query"
import type { TBetFormData } from "../MakeBet"

const useMakeBetApi = () => {
  const mutation = useMutation({
    mutationFn: async (newBet: TBetFormData) => {
      const response = await fetch('/api/newBets', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBet)
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