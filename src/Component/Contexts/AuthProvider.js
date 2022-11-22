import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const [loading,setLoading]=useState(true);



    const createUser=(email,password)=>{
        setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    };

    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    } ;

    const updateUserProfile=(userInfo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);

    }


    useEffect( ()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>unsubscribe();
    }, [])

    const authInfo={
        createUser,
        signIn,
        user,
        logOut,
        updateUserProfile,
        loading,





    };



    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;