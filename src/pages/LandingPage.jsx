// pages/index.jsx
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50">
      {/* Logo + App Name */}
      <div className="mb-6 text-center">
        <img src="data:image/png;base64,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" alt="App Logo" className="h-16 mx-auto" />
        <h1 className="text-3xl font-bold text-blue-600 mt-2">Grievana</h1>
        <p className="text-gray-500 text-lg mt-1">
          Your Voice. Your Resolution.
        </p>
      </div>

      {/* Illustration */}
      <div className="mb-6">
        <img
          src="/hero-illustration.svg"
          alt="Illustration"
          className="max-w-xs md:max-w-md"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            Register
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-400 text-center">
        © 2025 IEM Kolkata | Need help?{" "}
        <a href="anupkumar445a@gmail.com" className="text-blue-500">
          Contact Admin
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;
