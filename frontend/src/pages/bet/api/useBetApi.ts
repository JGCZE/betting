import { useQuery } from "@tanstack/react-query"
import type { components } from "@/types/generatedTypes";
import { httpGetRequest } from "@/api/httpClient";
import { API_ENDPOINTS } from "@/lib/endpoints"

type TBetPageData = components["schemas"]["BetResponseDto"];

const useBetApi = (betUrl: string) => {
  const { data, isError, isLoading } = useQuery({
    enabled: !!betUrl,
    queryFn: () => httpGetRequest<TBetPageData>(`${API_ENDPOINTS.PAGE_BY_URL}/${betUrl}`), // TODO: check api endpoint cesta
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