import { useMutation } from "@tanstack/react-query"
import { httpPostRequest } from "@/api/httpClient";

type LoginData = {
  password: string;
  userName: string;
}

const endpoint = '/auth/login';

const useLoginApi = () => {
  const mutation = useMutation({
    mutationFn: (data: LoginData) => httpPostRequest<LoginData>(endpoint, data),
    onError: (error) => {
      console.error("Login error:", error);
    },
    onSuccess: (data) => {
      console.log("Login success:", data);
      // Navigate or set user context here
    },
  })

  return {
    mutation
  }
}

export default useLoginApi;
