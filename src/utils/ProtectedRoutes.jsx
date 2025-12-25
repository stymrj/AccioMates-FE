import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import api from "../service/api" // centralized axios instance

const ProtectedRoutes = () => {
  const [isAuth, setIsAuth] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/users") // use centralized baseURL
        setIsAuth(true)
      } catch (err) {
        console.error("Auth check failed:", err)
        setIsAuth(false)
      }
    }

    checkAuth()
  }, [])

  if (isAuth === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Checking authentication...</p>
      </div>
    )
  }

  if (isAuth === false) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default ProtectedRoutes
