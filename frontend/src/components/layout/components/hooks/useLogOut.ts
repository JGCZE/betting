import { useMutation } from "@tanstack/react-query"
import { httpPostRequest } from "@/api/httpClient";

const ENDPOINT = '/auth/logout'

const useLogOutApi = () => {
  const mutation = useMutation({
    mutationFn: () => httpPostRequest(ENDPOINT, {}),
    onError: (error) => {
      console.error("Logout Error:", error)
    },
    onSuccess: () => {
      window.location.href = '/'
    }
  });

  return {
    mutation
  }
}

export default useLogOutApi;
