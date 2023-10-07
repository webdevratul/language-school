import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import Services from "../components/pages/Services";


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
            }
        ]
    },
]);

export default router;

