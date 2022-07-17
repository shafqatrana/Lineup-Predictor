import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Account from "./Account";
import ForgotPassword from "./ForgotPassword";
import { AuthContextProvider } from "../contexts/AuthContext";
import ProtectedRoute from './ProtectedRoute';
import "../styling/App.css";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}
export default App;