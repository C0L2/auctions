import { Navigate, createBrowserRouter } from 'react-router-dom'
import AboutUs from '@/pages/AboutUs'
import { Layout } from '@/layouts/Layout'
import Authorization from '@/pages/Authorization/Login'
import Auctions from '@/pages/Auctions'
import Contact from '@/pages/Contact'
import Rules from '@/pages/HowTo/Rules'
import FAQ from '@/pages/HowTo/FAQ'
import Registration from '@/pages/Authorization/Registration'
import ForgotPassword from '@/pages/Authorization/ForgotPassword'
import AuctionItemDetails from '../pages/AuctionItemDetails'

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
        path: '/rules',
        element: <Rules />,
      },
      {
        path: '/authorization',
        element: <Authorization />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/register',
        element: <Registration />,
      },
      {
        path: '/auctions',
        element: <Auctions />,
      },
      {
        path: '/auctions/:id',
        element: <AuctionItemDetails />,
      },
      {
        path: '/contact-us',
        element: <Contact />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
])
