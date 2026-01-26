import { Link } from '@tanstack/react-router'
import useAuth from '@/context/AuthContext';

const Navbar = () => {
  const { userName } = useAuth()

  return (
    <div className='page-layout flex justify-between items-center h-10 bg-[#3d5266] border-b-2 sticky top-0'>
      <Link className="navLink" to="/">
        Home
      </Link>

      <Link className="navLink" to="/createBet">
        Vsadit se
      </Link>

      <Link className="navLink" to="/overview">
        Všechny sázky
      </Link>

      {!!userName && <Link className="navLink" to="/badges">
        Odznaky a statistiky
      </Link>}
    </div>
  );
}

export default Navbar
