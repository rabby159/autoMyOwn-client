/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    
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
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            
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
        handleUpdateProfile,

    }


    return (
        <AuthContext.Provider value={AuthDetail}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;