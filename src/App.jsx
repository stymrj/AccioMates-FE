import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import Dashboard from "./components/Dashboard"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />


        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route path='*' element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}

export default App
