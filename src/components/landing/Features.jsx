import React from 'react';
import { Users, MessageCircle, BookOpen, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect with Peers",
      description: "Find and connect with students who share your interests and goals"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Collaborate Together",
      description: "Work on projects, share notes, and help each other succeed"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Study Groups",
      description: "Join or create study groups for your courses and subjects"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Achieve More",
      description: "Track progress, celebrate achievements, and grow together"
    }
  ];

  return (
    <div id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AccioMates?
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to connect with fellow students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;