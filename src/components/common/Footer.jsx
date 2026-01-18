import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Sparkles className="w-6 h-6" />
          <span className="text-2xl font-bold">AccioMates</span>
        </div>
        <p className="text-gray-400">© 2026 AccioMates. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;