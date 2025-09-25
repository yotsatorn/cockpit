import {
  Shield,
  Wrench,
  Database,
  FileText,
  Car,
  Settings,
} from "lucide-react";
import { Link } from "react-router";

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-[#fff200] flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-black tracking-wider">
            COCKPIT
          </h1>
        </div>

        {/* App Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-red-600 p-3 rounded-lg shadow-lg">
            <Shield className="w-4 h-4 md:w-8 md:h-8 text-white" />
          </div>
          <div className="bg-red-600 p-3 rounded-lg shadow-lg">
            <Wrench className="w-4 h-4 md:w-8 md:h-8 text-white" />
          </div>
          <div className="bg-red-600 p-3 rounded-lg shadow-lg">
            <Database className="w-4 h-4 md:w-8 md:h-8 text-white" />
          </div>
          <div className="bg-red-600 p-3 rounded-lg shadow-lg">
            <FileText className="w-4 h-4 md:w-8 md:h-8 text-white" />
          </div>
          <div className="bg-red-600 p-3 rounded-lg shadow-lg">
            <Car className="w-4 h-4 md:w-8 md:h-8 text-white" />
          </div>
          <div className="bg-red-600 p-3 rounded-lg shadow-lg">
            <Settings className="w-4 h-4 md:w-8 md:h-8 text-white" />
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md">
          <div className="space-y-4">
            <div>
              <label className="block text-black text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white border-none rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-black text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white border-none rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your password"
              />
            </div>

            <Link
              to="/menu"
              className="flex justify-center w-full bg-black text-white py-3 px-4 rounded font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Sign in
            </Link>
          </div>

          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-black text-sm hover:underline"
              onClick={(e) => {
                e.preventDefault();
                alert("Password reset functionality would go here");
              }}
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Red Bar */}
      <div className="h-16 bg-red-600"></div>
    </div>
  );
}
