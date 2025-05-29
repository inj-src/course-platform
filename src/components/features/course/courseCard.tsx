import Image from "next/image";

type props = {
   courseImageUrl: string;
   courseName?: string;
   children: React.ReactNode;
   size?: "small" | "default";
};

const sizeClasses = {
   small: ["min-w-[160px]", "h-[96px]"],
   default: ["min-w-[200px]", "h-[120px]"],
};

export function CourseCard({ courseImageUrl, courseName, children, size = "default" }: props) {
   const [width, height] = sizeClasses[size];
   return (
      <div className={`border border-gray-200 rounded-lg overflow-hidden ${width}`}>
         <div className={`relative ${height}`}>
            <Image
               src={courseImageUrl}
               alt={courseName || "Course Image"}
               className="w-full h-full object-cover"
               fill
            />
         </div>
         {children}
      </div>
   );
}
