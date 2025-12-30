import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../components/layout/Header'
import Navbar from '../components/layout/Navbar'

const RootLayout = () => (
  <>
    <div className='bg-[#3d5266] sticky top-0 z-10'>
      <Header />
      <Navbar />
    </div>

    <div className="page-layout flex">
      <Outlet />
    </div>

    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
