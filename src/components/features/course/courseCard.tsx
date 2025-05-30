import Image from "next/image";
import Link from "next/link";

type props = {
   courseImageUrl: string;
   courseName?: string;
   children: React.ReactNode;
   href?: string;
   size?: "small" | "default" | "full";
};

const sizeClasses = {
   small: "w-[160px]",
   full: "w-full",
   default: "w-[200px]",
};

export function CourseCard({
   courseImageUrl,
   courseName,
   children,
   size = "default",
   href = "/",
}: props) {
   const width = sizeClasses[size];
   return (
      <Link
         href={href}
         className={`border border-gray-200 rounded-lg overflow-hidden ${width} shrink-0`}
      >
         <div className={`relative aspect-[4/3]`}>
            <Image
               src={courseImageUrl}
               alt={courseName || "Course Image"}
               className="w-full h-full object-cover"
               fill
            />
         </div>
         {children}
      </Link>
   );
}
