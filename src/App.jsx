import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoutes from "./custom-hook/ProtectedRoutes";
import AdminNav from "./admin/AdminNav";
import AllProducts from "./admin/AllProducts";
import AddProducts from "./admin/AddProducts";
import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";
function App() {

  const LayOut = () => {
    return (
      <div className="app">
        <ScrollToTop/>
        <Header/>
        <Outlet />
        <Footer/>
      </div>
    )
  }
  const AdminPanelLayout = () => {
    return (
      <div className="app">
        <ScrollToTop/>
        <AdminNav/>
        <Outlet />
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop/:Id",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <ProtectedRoutes><Checkout /></ProtectedRoutes>,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },

      ]
    },
    {
      path: "/dashboard",
      element: <AdminPanelLayout/>,
      children: [
        {
          path: "/dashboard",
          element:<ProtectedRoutes><Dashboard/></ProtectedRoutes> ,
        },
        {
          path: "/dashboard/all-products",
          element:<ProtectedRoutes><AllProducts/></ProtectedRoutes> ,
        },
        {
          path: "/dashboard/add-products",
          element: <ProtectedRoutes><AddProducts/></ProtectedRoutes>,
        },
        {
          path: "/dashboard/users",
          element: <ProtectedRoutes><Users/></ProtectedRoutes>,
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider fallbackElement={<p>Loading...</p>} router={router} />
    </div>
  );
}

export default App;