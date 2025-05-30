import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignUp() {
   return (
      <div className="bg-white mx-auto w-full max-w-3xl min-h-screen">
         {/* Header */}
         <div className="flex items-center px-4 py-4">
            <Link href="/welcome" className="mr-4">
               <ArrowLeft className="w-6 h-6" />
            </Link>
         </div>

         {/* Content */}
         <div className="px-6 py-4">
            <h1 className="mb-2 font-bold text-2xl">Create Account</h1>
            <p className="mb-8 text-gray-600">Choose how you want to join</p>

            <div className="space-y-4">
               <Link
                  href="/signup/form"
                  className="flex justify-center items-center bg-gray-50 py-3 border border-gray-300 rounded-md w-full"
               >
                  <svg
                     className="mr-3 w-5 h-5"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                  >
                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                     <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="font-medium">Continue with Email</span>
               </Link>

               <button className="flex justify-center items-center bg-gray-50 py-3 border border-gray-300 rounded-md w-full">
                  <svg className="mr-3 w-5 h-5" viewBox="0 0 24 24">
                     <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                     />
                     <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                     />
                     <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                     />
                     <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                     />
                  </svg>
                  <span className="font-medium">Continue with Google</span>
               </button>
            </div>

            <p className="mt-8 text-gray-500 text-xs text-center leading-relaxed">
               By continuing, you agree to our{" "}
               <Link href="#" className="text-blue-500">
                  Terms of Service
               </Link>{" "}
               and{" "}
               <Link href="#" className="text-blue-500">
                  Privacy Policy
               </Link>
            </p>
         </div>
      </div>
   );
}
