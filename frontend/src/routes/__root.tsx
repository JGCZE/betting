import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../components/layout/Header'
import Navbar from '../components/layout/Navbar'

const RootLayout = () => (
  <>
    <div className='bg-[#3d5266] fixed w-full top-0'>
      <Header />

      <Navbar />
    </div>

    <div className="page-layout flex mt-24">
      <Outlet />
    </div>

    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
