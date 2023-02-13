import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Day } from './pages/Day/Day'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/day/:id',
    element: <Day />
  }
])

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
