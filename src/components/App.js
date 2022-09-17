import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Signup from "./Signup";
import Account from "./Account";
import ForgotPassword from "./ForgotPassword";
import { AuthContextProvider } from "../contexts/AuthContext";
import ProtectedRoute from './ProtectedRoute';
import "../styling/App.css";

//Use this page to add new paths to go to
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='' element={<Navbar/>}>
            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  )
}
export default App;