import { Progress } from "@/components/ui/progress";

type props = {
   courseName: string;
   totalLessons: number;
   completedLessons: number;
};

export function CourseListProgress({ courseName, totalLessons, completedLessons }: props) {
   return (
      <div className="p-3">
         <h4 className="font-medium text-sm">{courseName}</h4>
         <div className="mt-2">
            <Progress
               value={(completedLessons / totalLessons) * 100}
               className="bg-gray-200 [&>div]:bg-blue-500 [&>div]:rounded-full h-1.5"
            />
            <p className="mt-1 text-gray-500 text-xs">
               {completedLessons}/{totalLessons} lessons
            </p>
         </div>
      </div>
   );
}
