import Image from "next/image";
import { HeaderNavigation } from "@/components/features/header/headerNavigation";
import { NavigationBar } from "@/components/ui/navigationBar";
import { Clock, Download, FileText, ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CheckList from "@/components/features/list/checkList";
import Link from "next/link";

type props = {
   searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page({ searchParams }: props) {
   const { courseId, chapterIndex, lessonIndex } = searchParams;
   if (!courseId || !chapterIndex || !lessonIndex) return <p>How we even get here :)</p>;

   return (
      <div className="bg-white mx-auto pb-16 w-full max-w-3xl min-h-screen">
         {/* Header */}
         <HeaderNavigation title="Course details" backHref="/" />

         {/* Video Player */}
         <div className="relative bg-gray-900 w-full aspect-video">
            <Image
               src="https://placehold.co/400"
               alt="Video Thumbnail"
               className="w-full h-full object-cover"
               fill
            />
         </div>

         {/* Lesson Info */}
         <div className="[&>*]:px-5 py-4">
            <h2 className="mb-2 font-bold text-xl">Understanding User Interface Basics</h2>
            <div className="flex items-center mb-3 text-gray-600 text-sm">
               <Clock className="mr-1 w-4 h-4" />
               <span className="mr-3">45 minutes</span>
               <span>•</span>
               <span className="ml-3">12 of 24 lectures</span>
            </div>
            <div className="bg-gray-200 mx-5 mb-6 !px-0 rounded-full h-1.5">
               <div className="bg-blue-500 rounded-full h-1.5" style={{ width: "50%" }}></div>
            </div>

            {/* Lecture Overview */}
            <div className="mb-6">
               <h3 className="mb-3 font-medium text-lg">Lecture Overview</h3>
               <p className="text-gray-700">
                  Master web development from scratch with this comprehensive course. Learn HTML,
                  CSS, JavaScript, React, and Node.js through practical projects and real-world
                  applications.
               </p>
               <Button variant="link" className="flex items-center mt-2 px-0 text-blue-500">
                  <span>Show more</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
               </Button>
            </div>

            {/* Learning Objectives */}
            <div className="mb-6">
               <h3 className="mb-3 font-medium text-lg">Lecture Overview</h3>
               <CheckList />
            </div>

            {/* Attachments */}
            <div className="mb-6">
               <h3 className="mb-3 font-medium text-lg">Attachments</h3>
               <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                     <div className="flex items-center">
                        <div className="flex justify-center items-center bg-gray-200 mr-3 rounded-lg w-8 h-8">
                           <FileText className="w-4 h-4" />
                        </div>
                        <div>
                           <p className="font-medium text-sm">Lecture Slides</p>
                           <p className="text-gray-500 text-xs">12 MB</p>
                        </div>
                     </div>
                     <Download className="w-5 h-5 text-gray-500" />
                  </div>

                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                     <div className="flex items-center">
                        <div className="flex justify-center items-center bg-gray-200 mr-3 rounded-lg w-8 h-8">
                           <FileText className="w-4 h-4" />
                        </div>
                        <div>
                           <p className="font-medium text-sm">Exercise Files</p>
                           <p className="text-gray-500 text-xs">5 MB</p>
                        </div>
                     </div>
                     <Download className="w-5 h-5 text-gray-500" />
                  </div>

                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                     <div className="flex items-center">
                        <div className="flex justify-center items-center bg-gray-200 mr-3 rounded-lg w-8 h-8">
                           <FileText className="w-4 h-4" />
                        </div>
                        <div>
                           <p className="font-medium text-sm">Reading Materials</p>
                           <p className="text-gray-500 text-xs">3 MB</p>
                        </div>
                     </div>
                     <Download className="w-5 h-5 text-gray-500" />
                  </div>
               </div>
            </div>

            {/* Next Up */}
            <div className="mb-6">
               <h3 className="mb-3 font-medium text-lg">Next Up</h3>
               <div className="space-y-3">
                  <div className="flex items-center">
                     <div className="flex justify-center items-center bg-gray-200 mr-3 rounded-lg w-8 h-8">
                        <span className="font-medium text-sm">4</span>
                     </div>
                     <div className="flex-1">
                        <p className="font-medium">Social Media Marketing</p>
                        <p className="text-gray-500 text-sm">35 min</p>
                     </div>
                  </div>

                  <div className="flex items-center">
                     <div className="flex justify-center items-center bg-gray-200 mr-3 rounded-lg w-8 h-8">
                        <span className="font-medium text-sm">5</span>
                     </div>
                     <div className="flex-1">
                        <p className="font-medium">Content Strategy</p>
                        <p className="text-gray-500 text-sm">40 min</p>
                     </div>
                  </div>

                  <div className="flex items-center">
                     <div className="flex justify-center items-center bg-gray-200 mr-3 rounded-lg w-8 h-8">
                        <span className="font-medium text-sm">6</span>
                     </div>
                     <div className="flex-1">
                        <p className="font-medium">Analytics & Reporting</p>
                        <p className="text-gray-500 text-sm">45 min</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mb-3 border-gray-200 text-gray-500">
               <Link href="/" className="flex items-center">
                  <ArrowLeft />
               </Link>
               <span>12 of 24</span>
               <Link href="/" className="flex items-center">
                  <ArrowRight />
               </Link>
            </div>
         </div>

         <NavigationBar />
      </div>
   );
}
