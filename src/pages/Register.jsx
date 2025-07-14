import React from 'react';

const RegisterPage = () => {
  return (
    <>
        <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div class="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
    
     {/* Logo  */}
    <div class="flex justify-center mb-4">
      <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-red-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
        🌐
      </div>
    </div>

    {/* Heading  */}
    <h2 class="text-xl font-semibold text-center text-gray-800">Create an account</h2>
    <p class="text-sm text-center text-gray-500 mb-6">Sign up to get started</p>

     {/* Full Name  */}
    <label class="block text-sm mb-1 text-gray-600">Full Name</label>
    <input type="text" placeholder="Your name" class="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

     {/* Email  */}
    <label class="block text-sm mb-1 text-gray-600">E-Mail Address</label>
    <input type="email" placeholder="Enter your email..." class="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

     {/* Password  */}
    <label class="block text-sm mb-1 text-gray-600">Password</label>
    <input type="password" placeholder="••••••••" class="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

    {/*  Confirm Password */}
    <label class="block text-sm mb-1 text-gray-600">Confirm Password</label>
    <input type="password" placeholder="••••••••" class="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

     {/* Sign Up Button  */}
    <button class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">Sign Up</button>

    {/* Login Link */}
    <p class="text-center text-sm text-gray-600 mt-6">
      Already have an account? 
      <a href="/login" class="text-blue-600 hover:underline font-medium">Login</a>
    </p>
  </div>
</div>

    </>
  );
};

export default RegisterPage;
