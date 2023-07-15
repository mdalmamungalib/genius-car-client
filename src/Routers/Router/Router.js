import Maine from "../../Layout/Maine";
import Home from "../../Pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Maine></Maine>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
]);

export default router;