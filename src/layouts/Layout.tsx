import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'

export const Layout = () => (
  <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="max-w-[1000px] w-full px-5">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  </>
)
