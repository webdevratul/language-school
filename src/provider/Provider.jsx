import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);


export const Context = createContext(null);



const Provider = ({ children }) => {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    const createuser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = (name, photo) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user in the auth state ", currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [])

    const Info = { createuser, signIn, user, logOut, googleSignIn, profileUpdate, loading }

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

