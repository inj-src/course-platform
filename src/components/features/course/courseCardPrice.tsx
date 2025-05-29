import { Star } from "lucide-react";

type props = {
   courseName: string;
   instructor: string;
   rating: number;
   students: number;
   price: number;
};

const formatter = new Intl.NumberFormat("en-US", {
   notation: "compact",
   compactDisplay: "short", // or 'long' for "thousands"
});

export function CourseCardPrice({ courseName, instructor, rating, students, price }: props) {
   return (
      <div className="p-3">
         <h4 className="font-medium text-sm">{courseName}</h4>
         <p className="text-gray-500 text-xs">{instructor}</p>
         <div className="flex items-center mt-1">
            <div className="flex items-center">
               {/* <span className="-mt-1 mr-1 text-yellow-400">★</span> */}
               <Star className="mr-1 w-4 h-4 text-yellow-400" fill="currentColor" />
               <span className="font-medium text-xs">{rating}</span>
            </div>
            <span className="ml-1 text-gray-500 text-xs">
               ({formatter.format(students)} students)
            </span>
         </div>
         <p className="mt-1 font-medium text-blue-500">${price}</p>
      </div>
   );
}
