import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Products from './views/products'
import {Header} from "./components";
import ProductDetail from "./views/products/detail";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/detail",
        element: <ProductDetail />,
      },
    ]
  }
]);

export default router;