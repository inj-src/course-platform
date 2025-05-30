import { Download, FileText } from "lucide-react";

export function LessonFile() {
   return (
      <div className="flex justify-between items-center py-2">
         <div className="flex items-center">
            <div className="flex justify-center items-center bg-gray-200 mr-3 rounded-lg w-8 h-8 shrink-0">
               <FileText className="w-4 h-4" />
            </div>
            <div>
               <p className="font-medium text-sm">
                  Exercise: Create Your First Persona lets goo no way
               </p>
               <div className="flex items-center text-gray-500 text-xs">
                  <span>8 pages</span>
               </div>
            </div>
         </div>
         <Download className="w-5 h-5 text-gray-400" />
      </div>
   );
}
