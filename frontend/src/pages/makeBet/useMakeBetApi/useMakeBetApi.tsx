import { useMutation } from "@tanstack/react-query"
import { API_ENDPOINTS } from "@/lib/endpoints"
import type { TBetFormData } from "../MakeBet"

const URL = import.meta.env.VITE_API_BASE_URL

const useMakeBetApi = () => {
  const mutation = useMutation({
    mutationFn: async (newBet: TBetFormData) => {
      const response = await fetch(`${URL}${API_ENDPOINTS.CREATE_BET}`, {
        body: JSON.stringify(newBet),
        headers: { 'Content-Type': 'application/json' },
        method: "POST"
      })

      console.log("RESPONSE:", response)

      if (!response.ok) {
        throw new Error("Fail to create bet")
      }

      return response.json();
    }
  })

  return { mutation }
}

export default useMakeBetApi
