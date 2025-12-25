// components/Navbar.jsx
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../service/api"

const Navbar = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users")
        setUser(res.data)
      } catch (err) {
        setUser(null)
      }
    }

    fetchUser()
  }, [])

  const handleLogout = async () => {
    try {
      await api.post("/signout")
      setUser(null)
      navigate("/login")
    } catch (err) {
      console.error("Logout failed:", err)
    }
  }

  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">
        <Link to="/home">AccioMates</Link>
      </div>

      <div className="space-x-4">
        <Link className="hover:text-gray-200" to="/home">Home</Link>

        {user ? (
          <>
            <Link className="hover:text-gray-200" to="/dashboard">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="hover:text-gray-200" to="/login">Login</Link>
            <Link className="hover:text-gray-200" to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
