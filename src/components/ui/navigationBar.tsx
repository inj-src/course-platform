"use client";

import { Home, BookOpen, User, Compass } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationBar() {
   const pathName = usePathname();
   const style = (match: string) =>
      `flex flex-col items-center  ${
         pathName.split("/")[1] == match ? "text-blue-500" : "text-gray-400"
      }`;

   return (
      <div className="right-0 bottom-0 safe-bottom left-0 fixed flex justify-around bg-white mx-auto py-3 border-gray-200 border-t max-w-3xl">
         <Link href="/" className={style("")}>
            <Home className="w-6 h-6" />
            <span className="mt-1 text-xs">Home</span>
         </Link>
         <Link href="/explore" className={style("explore")}>
            <Compass className="w-6 h-6" />
            <span className="mt-1 text-xs">Explore</span>
         </Link>
         <Link href="/my-learning" className={style("my-learning")}>
            <BookOpen className="w-6 h-6" />
            <span className="mt-1 text-xs">My Learning</span>
         </Link>
         <Link href="/profile" className={style("profile")}>
            <User className="w-6 h-6" />
            <span className="mt-1 text-xs">Profile</span>
         </Link>
      </div>
   );
}
