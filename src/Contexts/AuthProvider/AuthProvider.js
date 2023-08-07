import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, sendEmailVerification, sendPasswordResetEmail, updateProfile, } from "firebase/auth";
import app from '../../../src/Firebase/Firebase.Config'


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleCreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleSignInWithPopup = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    };

    const handleSingOut = () => {
        localStorage.removeItem("Genius-Token")
        setLoading(true);
        return signOut(auth);
    };

    const emailVerification = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }

    const updateUser = (name) => {
        setLoading(true);
        updateProfile(auth.currentUser, name);
    }


    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        }));
        return () => {
          return  unsubscribe();
        }
    },[]);

    const authInfo = {
        handleCreateUser,
        handleLogin,
        handleSignInWithPopup,
        handleSingOut,
        user,
        emailVerification,
        resetPassword,
        updateUser,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;