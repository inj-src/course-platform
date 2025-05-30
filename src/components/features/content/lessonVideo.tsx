import { CheckMark } from "@/components/ui/checkMark";
import { Clock, Play } from "lucide-react";

export function LessonVideo() {
   return (
      <div className="flex justify-between items-center py-2">
         <div className="flex items-center">
            <div className="flex justify-center items-center bg-gray-200 mr-3 rounded-lg w-8 h-8 shrink-0">
               <Play className="w-4 h-4" />
            </div>
            <div>
               <p className="font-medium text-sm">Welcome to the Course</p>
               <div className="flex items-center text-gray-500 text-xs">
                  <Clock className="mr-1 w-3 h-3" />
                  <span>5.5h</span>
               </div>
            </div>
         </div>
         <CheckMark />
      </div>
   );
}
