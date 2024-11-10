import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthenticationContext = createContext(null)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const registerUserWithMailAndPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUserWithMailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // console.log(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        registerUserWithMailAndPassword,
        loginUserWithMailAndPassword,
        loginOut,
        user,
        loading
    }

    return (
        <AuthenticationContext.Provider value={authInfo}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthContext;