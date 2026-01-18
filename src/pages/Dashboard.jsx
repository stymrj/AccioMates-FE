import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Users, MessageCircle, BookOpen, Calendar, Settings, LogOut } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { signOut } from '../redux/slices/authSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(signOut());
    navigate('/');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-bold gradient-text">
                AccioMates
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600 transition">
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName || user?.username}! 👋
          </h1>
          <p className="text-xl text-gray-600">
            Here's what's happening with your connections today
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer">
            <Users className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Find Mates</h3>
            <p className="text-gray-600">
              Connect with students who share your interests and goals
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer">
            <MessageCircle className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Messages</h3>
            <p className="text-gray-600">
              Chat with your connections and stay updated
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer">
            <BookOpen className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Study Groups</h3>
            <p className="text-gray-600">
              Join or create study groups for collaborative learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;