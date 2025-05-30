import { Star } from "lucide-react";
import Image from "next/image";

export function CourseCardVertical() {
   return (
      <div className="mb-6 px-5">
         <div className="relative rounded-lg overflow-hidden">
            <div className="relative w-full aspect-video">
               <Image
                  src="https://placehold.co/400"
                  alt="Complete Web Development"
                  className="w-full h-full object-cover"
                  fill
               />
               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="right-4 bottom-0 left-4 absolute">
               <h3 className="mb-2 font-bold text-white text-xl">Complete Web Development...</h3>
               <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                     <span className="mr-2 text-white text-sm">John Smith</span>
                     <Star className="mr-1 w-4 h-4 text-yellow-400" fill="currentColor" />
                     <span className="text-white text-sm">4.8</span>
                  </div>
                  <span className="font-bold text-white text-xl">$89.99</span>
               </div>
            </div>
         </div>
      </div>
   );
}
