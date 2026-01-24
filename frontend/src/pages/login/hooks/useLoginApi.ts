import { useMutation } from "@tanstack/react-query"
import { httpPostRequest } from "@/api/httpClient";

type LoginData = {
  password: string;
  username: string;
}

const useLoginApi = () => {
  const mutation = useMutation({
    mutationFn: (data: LoginData) => httpPostRequest<LoginData>('/auth/login', data),
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

export default useLoginApi