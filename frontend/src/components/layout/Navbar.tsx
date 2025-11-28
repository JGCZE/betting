import { Link } from '@tanstack/react-router'

const Navbar = () => {
  return (
    <div className='flex flex-col items-center border-gray border-r gap-4 mx-4 mt-8'>
      <Link to="/" className="navLink">
        Home
      </Link>
      
      <Link to="/createBet" className="navLink">
        Vsadit se
      </Link>

      <Link to="/about" className="navLink">
        Přehled všech sázek
      </Link>

      <Link to="/badges" className="navLink">
        Odznaky a statistiky
      </Link>
    </div>
  )
}

export default Navbar
