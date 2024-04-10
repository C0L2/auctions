import { createBrowserRouter } from 'react-router-dom'
import AboutUs from '@/pages/AboutUs'
import { Layout } from '@/layouts/Layout'
import FAQ from '@/pages/FAQ'
import Login from '@/pages/Login'
import Auctions from '@/pages/Auctions'
import Contact from '@/pages/Contact'

export const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Auctions />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/auctions',
        element: <Auctions />,
      },
      {
        path: '/contact-us',
        element: <Contact />,
      },
    ],
  },
])
