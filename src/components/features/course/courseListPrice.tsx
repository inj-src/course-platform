import { Star } from "lucide-react";

const formatter = new Intl.NumberFormat("en-US", {
   notation: "compact",
   compactDisplay: "short", // or 'long' for "thousands"
});
export function CourseListPrice() {
   return (
      <div className="flex-1 p-3">
         <h4 className="font-medium">Python for Beginners</h4>
         <p className="text-gray-500 text-sm">David Wilson</p>
         <div className="flex items-center mt-1">
            <div className="flex items-center">
               <Star className="mr-1 w-4 h-4 text-yellow-400" fill="currentColor" />
               <span className="font-medium text-xs">{3.3}</span>
            </div>
            <span className="ml-1 text-gray-500 text-xs">({formatter.format(2344)} students)</span>
         </div>
         <p className="mt-1 font-medium text-blue-500 text-sm">$49.99</p>
      </div>
   );
}
