import { Link, useNavigate } from '@tanstack/react-router';
import useAuth from '@/context/AuthContext';
import { ECategory } from '@/lib/config';
import { Button } from '../ui/button';

const Navbar = () => {
  const { userName } = useAuth()
  const navigate = useNavigate()

  const STACK = Object.entries(ECategory).map((category) => {
    return {
      label: category[1],
      value: category[0]
    }
  })

  const handleFilterClick = (category: string) => {
    navigate({
      search: { cat: category.toLowerCase() },
      to: '/',
    });
  };

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
        {STACK.map(({ label, value }) => (
          <Button
            className='text-sm text-navy-400 bg-transparent cursor-pointer'
            key={label}
            onClick={() => handleFilterClick(value)}
            variant="link"
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
export default Navbar
