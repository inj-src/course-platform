import { TitleNavigation } from "@/components/ui/titleNavigation";
import { CourseCardPrice } from "@/components/features/course/courseCardPrice";
import { CourseCard } from "@/components/features/course/courseCard";
import { CircularCategory } from "../components/features/category/circularContainer";
import { NavigationBar } from "@/components/ui/navigationBar";
import { HomeHeader } from "@/components/features/header/homeHeader";
import { SearchBar } from "@/components/ui/search";

export default function App() {
   return (
      <div className="bg-white mx-auto pb-20 w-full max-w-3xl min-h-screen">
         <HomeHeader />
         <div className="mb-4 px-5">
            <h2 className="font-medium text-xl">Good morning, Alex</h2>
            <p className="text-gray-500">Ready to learn something new?</p>
         </div>

         {/* Search Bar */}
         <SearchBar />

         {/* Trending Now */}
         <div className="mb-6 [&>*]:px-5">
            <TitleNavigation title="Trending Courses" href="/explore" />

            <div className="flex gap-4 pb-2 overflow-x-auto">
               <CourseCard courseImageUrl="https://placehold.co/400" href="/explore/course">
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
