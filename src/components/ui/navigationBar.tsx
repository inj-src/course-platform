import { Home, BookOpen, User, Compass } from "lucide-react";
import Link from "next/link";

export function NavigationBar() {
   return (
      <div className="right-0 bottom-0 safe-bottom left-0 fixed flex justify-around bg-white mx-auto py-3 border-gray-200 border-t max-w-md">
         <Link href="#" className="flex flex-col items-center text-blue-500">
            <Home className="w-6 h-6" />
            <span className="mt-1 text-xs">Home</span>
         </Link>
         <Link href="/explore/course" className="flex flex-col items-center text-gray-400">
            <Compass className="w-6 h-6" />
            <span className="mt-1 text-xs">Explore</span>
         </Link>
         <Link href="#" className="flex flex-col items-center text-gray-400">
            <BookOpen className="w-6 h-6" />
            <span className="mt-1 text-xs">My Learning</span>
         </Link>
         <Link href="#" className="flex flex-col items-center text-gray-400">
            <User className="w-6 h-6" />
            <span className="mt-1 text-xs">Profile</span>
         </Link>
      </div>
   );
}
