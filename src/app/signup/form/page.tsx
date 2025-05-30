"use client";

import Link from "next/link";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignUpForm() {
   const [showPassword, setShowPassword] = useState(false);
   const [agreedToTerms, setAgreedToTerms] = useState(false);

   return (
      <div className="bg-white mx-auto w-full max-w-3xl min-h-screen">
         {/* Header */}
         <div className="flex items-center px-4 py-4">
            <Link href="/signup" className="mr-4">
               <ArrowLeft className="w-6 h-6" />
            </Link>
         </div>

         {/* Content */}
         <div className="px-6 py-4">
            <h1 className="mb-8 font-bold text-2xl">Create Your Account</h1>

            <form className="space-y-6">
               <div>
                  <label className="block mb-2 font-medium text-gray-700 text-sm">Full Name</label>
                  <input
                     type="text"
                     placeholder="Enter your full name"
                     className="bg-gray-50 px-4 py-3 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
               </div>

               <div>
                  <label className="block mb-2 font-medium text-gray-700 text-sm">
                     Email Address
                  </label>
                  <input
                     type="email"
                     placeholder="Enter your email"
                     className="bg-gray-50 px-4 py-3 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
               </div>

               <div>
                  <label className="block mb-2 font-medium text-gray-700 text-sm">Password</label>
                  <div className="relative">
                     <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="bg-gray-50 px-4 py-3 pr-12 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                     />
                     <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="top-1/2 right-3 absolute text-gray-400 -translate-y-1/2 transform"
                     >
                        {showPassword ? (
                           <EyeOff className="w-5 h-5" />
                        ) : (
                           <Eye className="w-5 h-5" />
                        )}
                     </button>
                  </div>
                  <p className="mt-1 text-gray-500 text-xs">Must be at least 8 characters long</p>
               </div>

               <div className="flex items-center">
                  <input
                     type="checkbox"
                     id="terms"
                     checked={agreedToTerms}
                     onChange={(e) => setAgreedToTerms(e.target.checked)}
                     className="mr-2"
                  />
                  <label htmlFor="terms" className="text-gray-600 text-xs leading-relaxed">
                     I agree to the{" "}
                     <Link href="#" className="text-blue-500">
                        Terms of Service
                     </Link>{" "}
                     and{" "}
                     <Link href="#" className="text-blue-500">
                        Privacy Policy
                     </Link>
                  </label>
               </div>

               <Link
                  href="/"
                  className="block bg-blue-500 py-3 rounded-md w-full font-medium text-white text-center"
               >
                  Create Account
               </Link>
            </form>
         </div>
      </div>
   );
}
