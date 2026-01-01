import { useQuery } from "@tanstack/react-query"
import { API_ENDPOINTS } from "@/lib/endpoints"

const URL = import.meta.env.VITE_API_BASE_URL

const useBetApi = (betUrl: string) => {
  const fetchBetPage = async (): Promise<any> => {
    const response = await fetch((`${URL}${API_ENDPOINTS.PAGE_BY_URL}/${betUrl}`))

    if (!response.ok) {
      throw new Error('cant fetch bet page data')
    }

    return response.json()
  }

  const { data, isError, isLoading } = useQuery({
    enabled: !!betUrl,
    queryFn: fetchBetPage,
    queryKey: ['betPageData'],
    // staleTime: 60 * 1000
  })

  return {
    data,
    isError,
    isLoading,
  }

}

export default useBetApi