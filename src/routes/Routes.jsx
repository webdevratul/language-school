import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import Services from "../components/pages/Services";
import Packages from "../components/pages/Packages";
import Subscribe from "../components/pages/Subscribe";
import Regsiter from "../components/pages/Register";
import Login from "../components/pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import ServicesDetails from "../components/pages/ServicesDetails";



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
            },
            {
                path: "/register",
                element: <Regsiter></Regsiter>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: '/servicesDetails/:id',
                element: <PrivateRoutes><ServicesDetails></ServicesDetails></PrivateRoutes>,
                loader: () => fetch("/public/services.json"),
            },
        ]
    },
]);

export default router;

