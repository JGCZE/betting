import { Link } from "@tanstack/react-router";
import { BsPersonCheckFill } from "react-icons/bs";
import useAuth from "@/context/AuthContext";
import Register from "@/pages/register/RegisterPage";
import { Input } from "../ui/input";
import { LogOut } from "./components";


const Header = () => {
  const { userName } = useAuth()

  const loggedInUser = userName?.userName

  console.log("SSS", userName)

  return (
    <div className="page-layout flex justify-between items-center h-14 bg-navy-600 border-b-2">
      <img src="/logo.svg" />

      <Input className="max-w-sm" placeholder="Hledat sázky..." />

      <div className="sm:hidden">MENU</div>

      <div className="flex gap-8">

        {loggedInUser ? (
          <div className="flex gap-2 justify-center items-center">
            <BsPersonCheckFill className="size-8 text-green-primary" />

            <p className="font-bold">
              {loggedInUser}
            </p>

            <LogOut />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4">
            <Register />

            <Link
              className="bg-sky-500 py-2 px-6 rounded-2xl hover:bg-sky-600"
              to="/login"
            >
              Přihlásit
            </Link>
          </div>
        )}
      </div>
    </div >
  )
}


export default Header;
