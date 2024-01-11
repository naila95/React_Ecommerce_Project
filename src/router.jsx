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
import DashboardLogin from "./layouts/dashboard/auth/DashboardLogin";
import AuthRouteForDashboard from "./helpers/AuthRouteForDashboard";
import { useContext, useEffect } from "react";
import { profileProcess } from "./services/auth";
import { UserContext } from "./contexts/AuthContext";
import ProtectedRouteForDashboard from "./helpers/ProtectedRouteForDashboard";
import Brands from "./layouts/dashboard/pages/brands/Brands";
import Cart from "./layouts/site/main/pages/home/homeComponents/Cart";

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
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: (
          <AuthRoute>
            <Checkout />
          </AuthRoute>
        ),
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
  { path: "dashboard/qwerty123/login", element: <DashboardLogin /> },
  {
    path: "dashboard",
    element: (
      <AuthRouteForDashboard>
        <DashboardLayout />
      </AuthRouteForDashboard>
    ),
    children: [
      {
        path: "",
        element: <Orders />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "dashboard-info",
        element: (
          <ProtectedRouteForDashboard
            roles={"superadmin"}
            component={<DashboardInfo />}
          />
        ),
      },

      {
        path: "products",
        element: <Products />,
      },
      {
        path: "staff",
        element: (
          <ProtectedRouteForDashboard
            roles={"superadmin"}
            component={<Staff />}
          />
        ),
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export const MainRouter = () => {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    profileProcess()
      .then(({ data }) => {
        setUser(data.user);
      })
      .catch((err) => {
        setUser(false);
        console.log(err);
      });
  }, []);
  return <RouterProvider router={router} />;
};
