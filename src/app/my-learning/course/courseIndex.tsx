import Image from "next/image";

import { NavigationBar } from "@/components/ui/navigationBar";
import { Play } from "lucide-react";
import { HeaderNavigation } from "@/components/features/header/headerNavigation";
import { Button } from "@/components/ui/button";
import { ChapterWrapper } from "@/components/features/content/chapterWrapper";
import { LessonVideo } from "@/components/features/content/lessonVideo";
import { LessonFile } from "@/components/features/content/lessonFile";

export function CourseIndex() {
   return (
      <div className="bg-white mx-auto pb-20 w-full max-w-3xl min-h-screen">
         {/* Header */}
         <HeaderNavigation backHref="/" title="Course Details" />

         {/* Course Banner */}
         <div className="relative w-full aspect-video">
            <Image
               src="https://placehold.co/400"
               alt="Advanced UX Design Principles"
               className="object-cover"
               fill
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="right-4 bottom-4 left-4 absolute text-white">
               <p className="mb-1 text-sm">by Sarah Johnson</p>
               <h2 className="mb-2 font-bold text-xl">Advanced UX Design Principles</h2>
               <p className="text-sm">65% Complete</p>
            </div>
         </div>

         {/* Progress Section */}
         <div className="px-4 py-4 border-b">
            <div className="bg-gray-200 mb-3 rounded-full w-full h-2">
               <div className="bg-blue-500 rounded-full h-2" style={{ width: "65%" }}></div>
            </div>
            <div className="flex justify-between text-gray-600 text-sm">
               <span>23 of 35 lectures completed</span>
            </div>
         </div>

         {/* Continue Learning Button */}
         <div className="px-4 py-4">
            <Button className="flex justify-start items-center gap-3 bg-blue-500 p-8 px-4 rounded-lg w-full text-white">
               <Play fill="currentColor" />
               <div className="text-left">
                  <div className="font-medium">Continue Learning: Lecture 24</div>
                  <div className="opacity-90 text-sm">12:35 remaining</div>
               </div>
            </Button>
         </div>

         {/* Course Curriculum */}
         <div className="px-5 min-h-[300px]">
            <ChapterWrapper>
               <LessonVideo />
               <LessonVideo />
               <LessonVideo />
               <LessonFile />
            </ChapterWrapper>
            <ChapterWrapper>
               <LessonVideo />
               <LessonVideo />
               <LessonVideo />
               <LessonFile />
            </ChapterWrapper>
         </div>

         {/* Bottom Navigation */}
         <NavigationBar />
      </div>
   );
}
