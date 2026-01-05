import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <div className="page-layout flex justify-between items-center h-14 bg-[#3d5266] border-b-2">
      <div>LOGO</div>

      <div className="sm:hidden">MENU</div>

      <Link to="/login">Login</Link>
    </div>
  )
}

export default Header;
