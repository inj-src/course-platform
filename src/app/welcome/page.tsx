import Link from "next/link";
import Image from "next/image";
import heroImage from "../../../public/welcome-hero.png";

export default function Welcome() {
   return (
      <div className="bg-white mx-auto max-w-md min-h-screen">
         {/* Hero Image */}
         <Image src={heroImage} alt="Hero image" />

         {/* Content */}
         <div className="flex flex-col items-center px-6 py-8 text-center">
            <h1 className="mb-3 font-bold text-2xl">Learn & Teach Anything</h1>
            <p className="mb-8 text-gray-600 leading-relaxed">
               Join millions of learners and educators in South Asia&apos;s largest skill-sharing
               platform
            </p>

            <Link
               href="/signup"
               className="block bg-blue-500 mb-4 py-3 rounded-md w-full font-medium text-white text-center"
            >
               Get Started
            </Link>
            <Link
               href="/"
               className="block mb-4 py-3 border border-zinc-500 rounded-md w-full font-medium text-center"
            >
               Explore
            </Link>

            <p className="text-gray-600 text-sm">
               Already have an account?{" "}
               <Link href="/signin" className="font-medium text-blue-500">
                  Sign in
               </Link>
            </p>
         </div>
      </div>
   );
}
