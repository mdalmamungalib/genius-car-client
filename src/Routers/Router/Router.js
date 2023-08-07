import Maine from "../../Layout/Maine";
import Checkout from "../../Pages/Checkout/Checkout";
import AboutClops from "../../Pages/Home/About/AboutClops";
import AddServices from "../../Pages/Home/AddServices/AddServices";
import Blog from "../../Pages/Home/Blog/Blog";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Orders from "../../Pages/Home/Orders/Orders";
import Srvc from "../../Pages/Home/Sarvices/Srvc";
import Login from "../../Pages/Login/Login";
import SingIn from "../../Pages/SingIn/SingIn";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Maine></Maine>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singIn",
        element: <SingIn></SingIn>
      },
      {
        path: "/service",
        element: <PrivateRoute>
          <Srvc></Srvc>
        </PrivateRoute>
      },
      {
        path: "/addServices",
        element: <AddServices></AddServices>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute>
          <Checkout></Checkout>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://class-66-67-69-genius-car-server.vercel.app/services/${params.id}`)
      },
      {
        path: "/orders",
        element: <PrivateRoute>
          <Orders></Orders>
        </PrivateRoute>
      },
      {
        path: "/about",
        element: <AboutClops></AboutClops>
      }
    ],
  },
]);

export default router;
