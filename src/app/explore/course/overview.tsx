import CheckList from "@/components/features/list/checkList";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ChevronDown } from "lucide-react";
import { CheckMark } from "../../../components/ui/checkMark";

export function Overview() {
   return (
      <div>
         <div className="px-4 py-4">
            <h3 className="mb-3 font-medium text-lg">About This Course</h3>
            <p className="text-gray-700">
               Master web development from scratch with this comprehensive course. Learn HTML, CSS,
               JavaScript, React, and Node.js through practical projects and real-world
               applications.
            </p>
            <Button variant="link" className="flex items-center mt-2 px-0 text-blue-500">
               <span>Show more</span>
               <ChevronDown className="ml-1 w-4 h-4" />
            </Button>
         </div>

         {/* What You'll Learn */}
         <div className="px-4 py-4">
            <h3 className="mb-3 font-medium text-lg">What You&apos;ll Learn</h3>
            <CheckList />
         </div>

         {/* Your Instructor */}
         <div className="px-4 py-4">
            <h3 className="mb-3 font-bold text-lg">Your Instructor</h3>
            <div className="flex items-start">
               <Avatar className="mr-3 rounded-full w-12 h-12 overflow-hidden">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
               <div>
                  <div className="flex items-center">
                     <h4 className="font-medium">Sarah Johnson</h4>
                     <CheckMark />
                  </div>
                  <p className="text-gray-600 text-sm">Senior Web Developer & Instructor</p>
                  <button className="mt-1 text-blue-500 text-sm">View Profile</button>
               </div>
            </div>
         </div>
      </div>
   );
}
