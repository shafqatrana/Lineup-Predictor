import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Signup from "./Signup";
import Account from "./Account";
import ForgotPassword from "./ForgotPassword";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import PickLineup  from "./PickLineup";
import ManageLeague from "./ManageLeague"
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
            <Route path='/leaderboard' element={<ProtectedRoute> <Leaderboard /> </ProtectedRoute>} />
            <Route path='/picklineup' element={<ProtectedRoute> <PickLineup /> </ProtectedRoute>} />
            <Route path='/manageleague' element={<ProtectedRoute> <ManageLeague /> </ProtectedRoute>} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
    </>
    
  )
}
export default App;