import '@/assets/css/global.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes/routes'

const App = () => {
  return <RouterProvider router={routers} />
}

export default App
