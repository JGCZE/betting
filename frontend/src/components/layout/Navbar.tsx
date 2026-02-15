import { Link } from '@tanstack/react-router';
import useAuth from '@/context/AuthContext';
import { ECategory } from '@/lib/config';
import { Button } from '../ui/button';

const Navbar = () => {
  const { userName } = useAuth()

  const STACK = Object.values(ECategory)

  return (
    <div className='page-layout flex gap-6 items-center h-10 bg-navy-600 border-b-2 sticky top-0'>
      <div className="gap-6 flex justify-center items-center">
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

      <div className='border h-6' />

      <div className='flex overflow-x-auto hide-scrollbar gap-0'>
        {STACK.map((stack) => (
          <Button
            className='text-sm text-navy-400 bg-transparent cursor-pointer'
            key={stack}
            variant="link"
          >
            {stack}
          </Button>
        ))}
      </div>
    </div>
  );
}
export default Navbar
