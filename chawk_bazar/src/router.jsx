import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import MainLayout from "./layouts/site/main/MainLayout";
import Home from "./layouts/site/main/pages/home/Home";
import Shop from "./layouts/site/main/pages/shop/Shop";
import AuthRoute from "./helpers/AuthRoute";
import Checkout from "./layouts/site/main/pages/checkout/Checkout";
import Details from "./layouts/site/main/pages/details/Details";
import AuthLayout from "./layouts/site/auth/AuthLayout";
import Login from "./layouts/site/auth/pages/Login";
import Register from "./layouts/site/auth/pages/Register";
import ProtectedRoute from "./helpers/ProtectedRoute";
import Orders from "./layouts/dashboard/pages/orders/Orders";
import Products from "./layouts/dashboard/pages/products/Products";
import NotFound from "./layouts/site/main/pages/notfound/NotFound";
import DashboardInfo from "./layouts/dashboard/pages/dashboardInfo/DashboardInfo";
import Staff from "./layouts/dashboard/pages/staff/Staff";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "checkout",
        element: <AuthRoute component={<Checkout />} redirectLink={"/login"} />,
      },
      {
        path: "details/:itemId",
        element: <Details />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard-info",
        element: <DashboardInfo />,
        // element: (
        //   <ProtectedRoute component={<DashboardInfo />} role={"superadmin"} />
        // ),
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "staff",
        element: <Staff />,
        // element: <ProtectedRoute component={<Staff />} role={"superadmin"} />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  //   {
  //     path: "/dashboad/auth",
  //     element: <DashboardAuthLayout />,
  //     children: [
  //       {
  //         path: "/login",
  //         element: <DashboardLogin />,
  //       },
  //     ],
  //   },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};
