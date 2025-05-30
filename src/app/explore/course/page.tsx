import Image from "next/image";
import { Clock, Users, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeaderNavigation } from "@/components/features/header/headerNavigation";
import { Button } from "@/components/ui/button";
import { CheckMark } from "@/components/ui/checkMark";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "./overview";
import { Content } from "./content";
import { Reviews } from "./reviews";

export default function CourseDetails() {
   return (
      <div className="bg-white mx-auto pb-28 w-full max-w-3xl min-h-screen">
         {/* Header */}
         <HeaderNavigation title="Course Details" backHref="/" />

         {/* Course Banner */}
         <div className="relative w-full aspect-video">
            <Image
               src="https://placehold.co/400"
               alt="Web Development Course"
               fill
               className="object-cover"
            />
         </div>

         {/* Course Title */}
         <div className="px-4 pt-4">
            <h2 className="font-bold text-2xl">Complete Web Development Course 2024</h2>
         </div>

         {/* Instructor */}
         <div className="flex items-center px-4 py-3">
            <Avatar className="mr-2 w-8 h-8">
               <AvatarImage src="https://github.com/shadcn.png" />
               <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex items-center">
               <span className="text-sm">By Sarah Johnson</span>
               <CheckMark />
            </div>
         </div>

         {/* Course Stats */}
         <div className="flex items-center space-x-4 px-4 text-gray-600 text-sm">
            <div className="flex items-center">
               <Star className="mr-1 w-4 h-4 text-yellow-400" fill="currentColor" />
               <span className="font-medium">4.8</span>
            </div>
            <div className="flex items-center">
               <Users className="mr-1 w-4 h-4" />
               <span>15K students</span>
            </div>
            <div className="flex items-center">
               <Clock className="mr-1 w-4 h-4" />
               <span>36 hours</span>
            </div>
         </div>

         {/* Price and Enroll */}
         <div className="flex justify-between items-center px-4 py-4">
            <div>
               <span className="font-bold text-2xl">$49.99</span>
               <span className="ml-2 text-gray-500 text-sm line-through">$99.99</span>
            </div>
            <Button size="sm" className="bg-blue-500 px-6 py-2 rounded-full font-medium text-white">
               Enroll Now
            </Button>
         </div>
         <ViewTabs />
         <EnrollButton />
      </div>
   );
}

function ViewTabs() {
   const style =
      "bg-transparent hover:bg-transparent py-2 border-transparent border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none rounded-none text-gray-500 data-[state=active]:text-blue-500";
   return (
      <Tabs defaultValue="overview" className="w-full">
         <TabsList className="justify-start gap-2 bg-transparent border-gray-200 border-b rounded-none w-full">
            <TabsTrigger className={style} value="overview">
               Overview
            </TabsTrigger>
            <TabsTrigger className={style} value="content">
               Content
            </TabsTrigger>
            <TabsTrigger className={style} value="reviews">
               Reviews
            </TabsTrigger>
         </TabsList>
         <TabsContent value="overview" className="min-h-[400px]">
            <Overview />
         </TabsContent>
         <TabsContent value="content" className="px-5 min-h-[400px]">
            <Content />
         </TabsContent>
         <TabsContent value="reviews" className="min-h-[400px]">
            <Reviews />
         </TabsContent>
      </Tabs>
   );
}

function EnrollButton() {
   return (
      <div className="right-0 bottom-0 left-0 fixed bg-white mx-auto p-4 border-gray-200 border-t max-w-3xl">
         <div className="flex justify-between items-center mb-2">
            <div>
               <span className="font-bold text-xl">$49.99</span>
               <span className="ml-2 text-gray-500 text-sm line-through">$99.99</span>
            </div>
            <div className="flex items-center">
               <Star className="mr-1 w-4 h-4 text-yellow-400" fill="currentColor" />
               <span className="font-medium">4.8</span>
               <span className="ml-1 text-gray-500 text-sm">(2.4k)</span>
            </div>
         </div>
         <Button size="lg" className="bg-blue-500 rounded-md w-full font-medium text-white">
            Enroll Now
         </Button>
      </div>
   );
}
