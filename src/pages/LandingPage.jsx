import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-44 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Connect. Collaborate.
              <br />
              <span className="gradient-text">
                Succeed Together
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of students building meaningful connections, 
              sharing knowledge, and achieving academic excellence together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link to="/signin" className="btn-secondary">
                Sign In
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
