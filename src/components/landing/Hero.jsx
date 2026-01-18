import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full mb-6 animate-pulse">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-600">
              Your Study Companion Awaits
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Connect. Collaborate.
            <br />
            <span className="gradient-text">
              Succeed Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of students building meaningful connections, sharing knowledge, 
            and achieving academic excellence together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn-primary flex items-center justify-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/signin" className="btn-secondary">
              Sign In
            </Link>
          </div>
        </div>

        {/* Floating Animation */}
        <div className="mt-20 relative h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;