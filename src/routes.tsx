import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Articles from 'views/articles'
import { Header, Footer } from "components";
import ProductDetail from "views/articles/detail";

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
        element: <Articles />,
      },
      {
        path: "/detail",
        element: <ProductDetail />,
      },
    ]
  }
]);

export default router;