import { useNavigate } from "@tanstack/react-router";

const useNavigateHome = () => {
  const navigate = useNavigate();

  return () => navigate({ to: "/", search: { cat: undefined } });
};

export default useNavigateHome;
