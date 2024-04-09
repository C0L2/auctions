import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'

export const Layout = () => (
  <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  </>
)
