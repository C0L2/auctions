import { createBrowserRouter } from 'react-router-dom'
import AboutUs from '@/pages/AboutUs'
import Home from '@/pages/Home'
import { Layout } from '@/layouts/Layout'

export const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/faq',
        element: <AboutUs />,
      },
    ],
  },
])
