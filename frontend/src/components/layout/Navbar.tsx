import { Link } from '@tanstack/react-router'

const Navbar = () => (
    <div className='page-layout flex justify-between items-center h-10 bg-[#3d5266] border-b-2'>
      <Link className="navLink" to="/">
        Home
      </Link>

      <Link className="navLink" to="/createBet">
        Vsadit se
      </Link>

      <Link className="navLink" to="/overview">
        Přehled všech sázek
      </Link>

      <Link className="navLink" to="/badges">
        Odznaky a statistiky
      </Link>
    </div>
);

export default Navbar
