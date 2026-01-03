import { useQuery } from "@tanstack/react-query"
import type { components } from "@/types/generatedTypes";
import apiClient from "@/lib/apiClient"
import { API_ENDPOINTS } from "@/lib/endpoints"

type TBetPageData = components["schemas"]["BetResponseDto"];

const useBetApi = (betUrl: string) => {
  const { data, isError, isLoading } = useQuery({
    enabled: !!betUrl,
    queryFn: () => apiClient<TBetPageData>(`${API_ENDPOINTS.PAGE_BY_URL}/${betUrl}`),
    queryKey: ['betPageData'],
    staleTime: 60 * 1000
  })

  return {
    data,
    isError,
    isLoading,
  }

}

export default useBetApi