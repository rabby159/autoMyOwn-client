/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const signInGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const handleUpdateProfile = (name, imageURL) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imageURL
          })
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return() => {
            unSubscribe();
        }
    }, [])

    const AuthDetail = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        signInGoogle,
        handleUpdateProfile

    }


    return (
        <AuthContext.Provider value={AuthDetail}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;