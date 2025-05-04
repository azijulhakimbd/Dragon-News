import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  // Create User with email password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInWithEmailAndPassword

  const signIn=(email, password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }


    // signInWithGoogle
    const provider = new GoogleAuthProvider();
    const signInWithGoogle=()=>{
      return signInWithPopup(auth,provider)
    }
  //  Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const userData = {
    user,
    setUser,
    createUser,
    signIn,
    signInWithGoogle
  };
  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;
