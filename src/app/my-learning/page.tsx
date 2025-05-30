"use client";

import { Clock, Flame, BookOpen } from "lucide-react";
import { HeaderNavigation } from "@/components/features/header/headerNavigation";
import { NavigationBar } from "@/components/ui/navigationBar";
import { TitleNavigation } from "@/components/ui/titleNavigation";
import { CourseCard } from "@/components/features/course/courseCard";
import { CourseCardProgress } from "@/components/features/course/courseCardProgress";
import { ViewToggle } from "./viewToggle";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CourseList } from "@/components/features/course/courseList";
import { CourseListProgress } from "@/components/features/course/courseListProgress";

export default function Page() {
   return (
      <div className="bg-white mx-auto pb-28 w-full max-w-3xl min-h-screen">
         {/* Header */}
         <HeaderNavigation title="Course Details" backHref="/" />

         {/* Stats Section */}
         <div className="bg-gray-50 mx-5 mt-5 mb-6 px-4 py-6 rounded-lg">
            <div className="flex justify-around">
               <div className="text-center">
                  <div className="flex justify-center items-center bg-blue-100 mx-auto mb-2 rounded-full w-12 h-12">
                     <BookOpen className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="font-bold text-2xl">12</div>
                  <div className="text-gray-600 text-sm">Courses</div>
               </div>
               <div className="text-center">
                  <div className="flex justify-center items-center bg-blue-100 mx-auto mb-2 rounded-full w-12 h-12">
                     <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="font-bold text-2xl">32</div>
                  <div className="text-gray-600 text-sm">Hours Learned</div>
               </div>
               <div className="text-center">
                  <div className="flex justify-center items-center bg-blue-100 mx-auto mb-2 rounded-full w-12 h-12">
                     <Flame className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="font-bold text-2xl">5</div>
                  <div className="text-gray-600 text-sm">Day</div>
               </div>
            </div>
         </div>
         {/* Continue Learning  */}
         <div className="mt-6 mb-6 [&>*]:px-5">
            <TitleNavigation title="Continue Learning" noAction />
            <div className="flex gap-4 pb-2 overflow-x-auto">
               <CourseCard
                  size="small"
                  courseImageUrl="https://placehold.co/400"
                  href="/my-learning/course?courseId=23"
               >
                  <CourseCardProgress
                     courseName="React full course"
                     completedLessons={12}
                     totalLessons={14}
                  />
               </CourseCard>
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

         {/* Grid/List view  */}
         <CourseView />
         <NavigationBar />
      </div>
   );
}

function CourseView() {
   const [type, setType] = useState("flex");

   return (
      <div className="mt-6 mb-6 [&>*]:px-5">
         <TitleNavigation title="All Courses">
            <ViewToggle callBack={(type) => setType(type)} />
         </TitleNavigation>
         <div className={cn("gap-4 pb-2 grid-cols-2 xl:grid-cols-3 flex-col", type)}>
            {type == "grid" ? <GridView /> : <ListView />}
         </div>
      </div>
   );
}

function GridView() {
   return (
      <>
         <CourseCard size="full" courseImageUrl="https://placehold.co/400">
            <CourseCardProgress
               courseName="React full course"
               completedLessons={12}
               totalLessons={14}
            />
         </CourseCard>
         <CourseCard size="full" courseImageUrl="https://placehold.co/400">
            <CourseCardProgress
               courseName="React full course"
               completedLessons={12}
               totalLessons={14}
            />
         </CourseCard>
         <CourseCard size="full" courseImageUrl="https://placehold.co/400">
            <CourseCardProgress
               courseName="React full course"
               completedLessons={12}
               totalLessons={14}
            />
         </CourseCard>
      </>
   );
}

function ListView() {
   return (
      <>
         <CourseList>
            <CourseListProgress
               completedLessons={23}
               totalLessons={53}
               courseName="Python Beginners to Master"
            />
         </CourseList>
         <CourseList>
            <CourseListProgress
               completedLessons={23}
               totalLessons={53}
               courseName="Python Beginners to Master"
            />
         </CourseList>
      </>
   );
}
