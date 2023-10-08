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
import Error from "../components/layouts/Error";
import Profile from "../components/pages/Profile";
import Setting from "../components/pages/Setting";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
            },
            {
                path: '/setting',
                element: <PrivateRoutes><Setting></Setting></PrivateRoutes>,
            },
        ]
    },
]);

export default router;

