import { createContext } from "react";
import PropTypes from 'prop-types';
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);


export const Context = createContext(null);

const Provider = ({ children }) => {

    const Info = {  }

    return (
        <Context.Provider value={Info}>
            {children}
        </Context.Provider>
    );
};

export default Provider;

Provider.propTypes = {
    children: PropTypes.node,
}

