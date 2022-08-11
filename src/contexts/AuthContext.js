import { createContext, useContext, useEffect, useState  } from "react";
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
 } from "firebase/auth";
 import { auth } from "../firebase-config";

 const UserContext = createContext();

 export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
  
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
     const signIn = (email, password) =>  {
      return signInWithEmailAndPassword(auth, email, password)
     }
  
    const logout = () => {
        return signOut(auth)
    }

    const forgotPassword = (email) => {
      return sendPasswordResetEmail(auth, email).then((a) => {})
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        //MIGHT WANNA REMOVE THIS CONSOLE.LOG FOR FINAL BUILD
        console.log(currentUser);
        setUser(currentUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <UserContext.Provider value={{ createUser, user, logout, signIn, forgotPassword }}>
        {children}
      </UserContext.Provider>
    );
  };

export const UserAuth = () => {
    return useContext(UserContext);
};