import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Signup from "./Signup";
import Account from "./Account";
import ForgotPassword from "./ForgotPassword";
import Home from "./Home";
import { AuthContextProvider } from "../contexts/AuthContext";
import ProtectedRoute from './ProtectedRoute';
import "../styling/App.css";

//Use this page to add new paths to go to
function App() {
  
  return (
    <>
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route element={<Navbar/>}>
            <Route path='/account' element={<ProtectedRoute> <Account /> </ProtectedRoute>} />
            <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          </Route>
          
        </Routes>
      </AuthContextProvider>
    </div>
    </>
    
  )
}
export default App;