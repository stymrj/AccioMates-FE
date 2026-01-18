import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of motivated students today
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition"
          >
            Create Your Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;