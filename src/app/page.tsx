import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TitleNavigation } from "@/components/ui/titleNavigation";

import { CourseCardProgress } from "@/components/features/course/courseCardProgress";
import { CourseCardPrice } from "@/components/features/course/courseCardPrice";
import { CourseCard } from "@/components/features/course/courseCard";
import { CircularCategory } from "../components/features/category/circularContainer";
import { NavigationBar } from "@/components/ui/navigationBar";
import HeaderProfile from "@/components/features/header/headerProfile";

export default function UpskillApp() {
   return (
      <div className="bg-white mx-auto pb-20 w-[100vw] max-w-3xl min-h-screen">
         {/* App Header */}
         <HeaderProfile />

         {/* Greeting */}
         <div className="mb-4 px-5">
            <h2 className="font-medium text-xl">Good morning, Alex</h2>
            <p className="text-gray-500">Ready to learn something new?</p>
         </div>

         {/* Search Bar */}
         <div className="mb-6 px-5">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
               <Search className="mr-2 w-5 h-5 text-gray-400" />
               <Input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="bg-transparent shadow-none border-none outline-none w-full text-sm"
               />
            </div>
         </div>

         {/* Continue Learning */}
         <div className="mb-6 [&>*]:px-5">
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

         {/* Browse Categories */}
         <CircularCategory />

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
         {/* Bottom Navigation */}
         <NavigationBar />
      </div>
   );
}
