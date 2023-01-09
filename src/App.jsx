import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './pages/Home/Home';
import { Button } from "./components/Button/Button";
import { Day } from './pages/Day/Day';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/day/:id",
    element: <Day />,
  }
]);

export const App = () => {
  return (
    <>
      <Button />
      <RouterProvider router={router} />
    </>
  )
}