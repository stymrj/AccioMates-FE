import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 ">
        <div>
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">
            Welcome to AccioMates!
          </h2>
          <p className="text-gray-700 mb-6">
            Connect with AccioJob Friends! Login or signup to post something, share ideas, and chat with your mates!.
          </p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 rounded-lg border border-indigo-500 text-indigo-500 font-semibold hover:bg-indigo-100"
            >
              Login
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home
