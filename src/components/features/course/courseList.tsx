import Image from "next/image";

export function CourseList({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex border border-zinc-200 rounded-lg overflow-clip">
         <div className="relative w-[120px] aspect-[4/3] overflow-hidden">
            <Image
               src="https://placehold.co/400"
               alt="Python Course"
               className="w-full h-full object-cover"
               fill
            />
         </div>
         {children}
      </div>
   );
}
