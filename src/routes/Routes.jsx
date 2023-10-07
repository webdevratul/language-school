import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import Services from "../components/pages/Services";
import Packages from "../components/pages/Packages";
import Subscribe from "../components/pages/Subscribe";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/packages",
                element: <Packages></Packages>,
            },
            {
                path: "/subscribe",
                element: <Subscribe>s</Subscribe>,
            }
        ]
    },
]);

export default router;

