import { NavigationBar } from "../../components/ui/navigationBar";
import { TitleNavigation } from "@/components/ui/titleNavigation";
import { CourseCard } from "@/components/features/course/courseCard";
import { CourseCardProgress } from "@/components/features/course/courseCardProgress";
import { CourseCardPrice } from "@/components/features/course/courseCardPrice";
import { ProfileHeader } from "@/components/features/header/profileHeader";
import { Chart } from "@/components/ui/chart";

export default function MyLearning() {
   return (
      <div className="bg-white mx-auto pb-20 w-[100vw] max-w-3xl min-h-screen">
         {/* App Header */}
         <ProfileHeader />
         <div className="px-5">
            <div className="flex justify-between items-end mb-3">
               <div>
                  <div className="text-3xl">12.5h</div>
                  <div className="text-gray-600 text-sm">Hours this week</div>
               </div>
               <div className="text-right">
                  <div className="font-medium text-green-500 text-sm">+2.5 hours</div>
                  <div className="text-gray-500 text-xs">vs last week</div>
               </div>
            </div>
         </div>
         <Chart data={[80, 10, 70, 30, 10, 20, 60]} />
         {/* Continue Learning */}
         <div className="mt-12 mb-6 [&>*]:px-5">
            <TitleNavigation title="Continue Learning" />
            <div className="flex gap-4 pb-2 overflow-x-auto">
               <CourseCard size="small" courseImageUrl="https://placehold.co/400">
                  <CourseCardProgress
                     courseName="UI/UX full course"
                     completedLessons={4}
                     totalLessons={14}
                  />
               </CourseCard>

               <CourseCard size="small" courseImageUrl="https://placehold.co/400">
                  <CourseCardProgress
                     courseName="React full course"
                     completedLessons={12}
                     totalLessons={14}
                  />
               </CourseCard>
            </div>
         </div>

         {/* Trending Now */}
         <div className="mb-6 [&>*]:px-5">
            <TitleNavigation title="Trending Courses" />

            <div className="flex gap-4 pb-2 overflow-x-auto">
               <CourseCard courseImageUrl="https://placehold.co/400">
                  <CourseCardPrice
                     courseName="Photography Essential"
                     instructor="David Kim"
                     rating={4.8}
                     students={1800}
                     price={39.99}
                  />
               </CourseCard>
               <CourseCard courseImageUrl="https://placehold.co/400">
                  <CourseCardPrice
                     courseName="Photography Essential"
                     instructor="David Kim"
                     rating={4.8}
                     students={1800}
                     price={39.99}
                  />
               </CourseCard>
               <CourseCard courseImageUrl="https://placehold.co/400">
                  <CourseCardPrice
                     courseName="Photography Essential And Cinematography"
                     instructor="David Kim"
                     rating={4.8}
                     students={1800}
                     price={39.99}
                  />
               </CourseCard>
            </div>
         </div>

         {/* Recommended for You */}
         <div className="[&>*]:px-5">
            <TitleNavigation title="Recommended for You" />

            <div className="flex gap-4 pb-2 overflow-x-auto">
               <CourseCard courseImageUrl="https://placehold.co/400">
                  <CourseCardPrice
                     courseName="Photography Essential"
                     instructor="David Kim"
                     rating={4.8}
                     students={1800}
                     price={39.99}
                  />
               </CourseCard>
               <CourseCard courseImageUrl="https://placehold.co/400">
                  <CourseCardPrice
                     courseName="Photography Essential"
                     instructor="David Kim"
                     rating={4.8}
                     students={1800}
                     price={39.99}
                  />
               </CourseCard>
               <CourseCard courseImageUrl="https://placehold.co/400">
                  <CourseCardPrice
                     courseName="Photography Essential And Cinematography"
                     instructor="David Kim"
                     rating={4.8}
                     students={1800}
                     price={39.99}
                  />
               </CourseCard>
            </div>
         </div>
         <NavigationBar />
      </div>
   );
}
