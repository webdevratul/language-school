import { useContext } from "react";
import { Context } from "../provider/Provider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(Context);
    if (loading) {
        return <div className="w-[100px] mx-auto mt-40 z-20">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}