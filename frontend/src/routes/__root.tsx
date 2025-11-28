import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../components/layout/Header'
import Navbar from '../components/layout/Navbar'

const RootLayout = () => (
  <>
    <Header />

    <div className="page-layout grid grid-cols-5">
      <Navbar />

      <div className='col-span-4 pt-8 px-4'>
        <Outlet />
      </div>
    </div>

    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
