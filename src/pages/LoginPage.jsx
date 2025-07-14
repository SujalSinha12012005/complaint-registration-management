import React from "react";

const Loginpage = () => {
  return (
    <>
      <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div class="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
          {/* Logo */}
          <div class="flex justify-center mb-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-red-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
              🌐
            </div>
          </div>

          {/* Heading  */}
          <h2 class="text-xl font-semibold text-center text-gray-800">
            Welcome back
          </h2>
          <p class="text-sm text-center text-gray-500 mb-6">
            Please enter your details to sign in.
          </p>

          {/* Social Buttons  */}
          <div class="flex justify-between gap-3 mb-6">
            <button class="flex-1 border rounded-lg px-4 py-2 flex items-center justify-center hover:bg-gray-50">
              <img
                src="https://img.icons8.com/ios-filled/20/000000/mac-os.png"
                class="w-5 h-5"
              />
            </button>
            <button class="flex-1 border rounded-lg px-4 py-2 flex items-center justify-center hover:bg-gray-50">
              <img
                src="https://img.icons8.com/color/20/000000/google-logo.png"
                class="w-5 h-5"
              />
            </button>
            <button class="flex-1 border rounded-lg px-4 py-2 flex items-center justify-center hover:bg-gray-50">
              <img
                src="https://img.icons8.com/ios-filled/20/1DA1F2/twitter.png"
                class="w-5 h-5"
              />
            </button>
          </div>

          {/* Divider */}
          <div class="flex items-center mb-6">
            <hr class="flex-1 border-gray-300" />
            <span class="mx-2 text-gray-400 text-sm">OR</span>
            <hr class="flex-1 border-gray-300" />
          </div>

          {/* Email */}
          <label class="block text-sm mb-1 text-gray-600">E-Mail Address</label>
          <input
            type="email"
            placeholder="Enter your email..."
            class="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <label class="block text-sm mb-1 text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/*  Remember + Forgot */}
          <div class="flex justify-between items-center mb-4 text-sm">
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-600" />
              <span class="text-gray-600">Remember me</span>
            </label>
            <a href="#" class="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Sign in
          </button>

          {/* Sign Up Link  */}
          <p class="text-center text-sm text-gray-600 mt-6">
            Don't have an account yet?
            <a href="/register" class="text-blue-600 hover:underline font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
