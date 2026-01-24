import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, type ReactNode } from "react";
import { httpGetRequest } from "@/api/httpClient";

type User = {
  userId: number;
  username: string;
}

type AuthContextType = {
  isError: boolean;
  isLoading: boolean;
  username?: User;
}

interface IAuthProvider {
  children: ReactNode;
}

const endpoint = '/auth/me'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: IAuthProvider) => {
  console.log("TEST CONTEXT")

  const { data: username, isError, isLoading } = useQuery({
    queryFn: () => httpGetRequest<User>(endpoint),
    queryKey: ["authentiaction"],
    refetchOnWindowFocus: false,
    retry: false,
  })

  return (
    <AuthContext value={{ isError, isLoading, username }}>
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