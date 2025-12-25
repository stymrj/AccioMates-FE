import { useEffect, useState } from "react"
import api from "../service/api"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users")
        setUser(res.data)
      } catch (err) {
        console.error("Failed to fetch user:", err)
        navigate("/login") // if token invalid / 401
      }
    }

    fetchUser()
  }, [navigate])

  const handleLogout = async () => {
    try {
      await api.post("/signout")
      navigate("/login")
    } catch (err) {
      console.error("Logout failed:", err)
    }
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-blue-200">
        <p className="text-gray-700 text-lg animate-pulse">Loading user info...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-200 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 ring-1 ring-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">Welcome, {user.firstName}!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-700">
          <p><span className="font-semibold">First Name:</span> {user.firstName}</p>
          <p><span className="font-semibold">Last Name:</span> {user.lastName}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Role:</span> {user.role}</p>
          <p><span className="font-semibold">Phone:</span> {user.phoneNumber}</p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
