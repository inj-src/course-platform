import { Check } from "lucide-react";

export function CheckMark({ className }: { className?: string }) {
   return (
      <div
         className={
            "flex justify-center items-center bg-blue-500 ml-2 rounded-full w-4 h-4 shrink-0 " +
            className
         }
      >
         <Check className="text-white" size={10} strokeWidth={3} />
      </div>
   );
}
