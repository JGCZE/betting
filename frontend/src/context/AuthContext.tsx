import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, type ReactNode } from "react";
import { httpGetRequest } from "@/api/httpClient";

type User = {
  userId: number;
  userName: string;
}

type AuthContextType = {
  isError: boolean;
  isLoading: boolean;
  userName?: User;
}

interface IAuthProvider {
  children: ReactNode;
}

const endpoint = '/auth/me'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const { data: userName, isError, isLoading } = useQuery({
    queryFn: () => httpGetRequest<User>(endpoint),
    queryKey: ["authentiaction"],
    refetchOnWindowFocus: false,
    retry: false,
  })

  return (
    <AuthContext value={{ isError, isLoading, userName }}>
      {children}
    </AuthContext>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used withing AuthProvider")
  }

  return context
}

export default useAuth;