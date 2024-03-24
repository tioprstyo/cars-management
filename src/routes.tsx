import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Cars from 'views/cars'
import { Header, Footer } from "components";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <div className="md:mt-24 mt-16 md:mb-15 mb-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Cars />,
      },
    ]
  }
]);

export default router;