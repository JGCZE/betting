import { Link } from '@tanstack/react-router'

const Navbar = () => {
  return (
    <div className='flex-col items-center border-gray border-r gap-4 mx-4 mt-8 min-w-48 hidden sm:flex'>
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
  )
}

export default Navbar
