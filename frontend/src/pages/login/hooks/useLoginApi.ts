import { useMutation, useQueryClient } from "@tanstack/react-query"
import { httpPostRequest } from "@/api/httpClient";
import useNavigateHome from "@/hooks/useNavigateHome";

type LoginData = {
  password: string;
  userName: string;
}

const endpoint = '/auth/login';

const useLoginApi = () => {
  const queryClient = useQueryClient();
  const navigateHome = useNavigateHome();

  const mutation = useMutation({
    mutationFn: (data: LoginData) => httpPostRequest<LoginData>(endpoint, data),
    onError: (error) => {
      console.error("Login error:", error);
    },
    onSuccess: (data) => {
      console.log("Login success:", data);
      queryClient.invalidateQueries({ queryKey: ["authentiaction"] });
      navigateHome();
    },
  })

  return {
    mutation
  }
}

export default useLoginApi;
