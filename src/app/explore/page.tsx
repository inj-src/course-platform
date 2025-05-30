"use client";

import { Code, Palette, BarChart2, Globe } from "lucide-react";
import { NavigationBar } from "@/components/ui/navigationBar";
import { HomeHeader } from "@/components/features/header/homeHeader";
import { SearchBar } from "@/components/ui/search";
import { Button } from "@/components/ui/button";
import { CourseCarousel } from "@/components/features/course/courseCarousel";
import { TitleNavigation } from "@/components/ui/titleNavigation";
import { CourseCard } from "@/components/features/course/courseCard";
import { CourseCardPrice } from "@/components/features/course/courseCardPrice";
import { CourseList } from "@/components/features/course/courseList";
import { CourseListPrice } from "@/components/features/course/courseListPrice";

export default function Explore() {
   return (
      <div className="bg-white mx-auto pb-20 w-full max-w-3xl min-h-screen">
         {/* Header */}
         <HomeHeader />

         {/* Search Bar */}
         <SearchBar className="mb-3" />

         {/* Category Tabs */}
         <div className="mb-4 px-5">
            <div className="flex space-x-3">
               <Button className="bg-blue-500 px-4 py-2 rounded-full font-semibold text-white">
                  All
               </Button>
               <Button variant="outline" className="px-4 py-2 rounded-full font-medium">
                  Technology
               </Button>
            </div>
         </div>

         {/* Featured Course */}
         <CourseCarousel />
         {/* Trending Now */}
         <div className="mb-6 [&>*]:px-5">
            <TitleNavigation title="Recommended for You" />

            <div className="flex gap-4 overflow-x-auto">
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
         <div className="mb-6 px-5">
            <h3 className="mb-4 font-medium text-lg">Browse Categories</h3>
            <div className="gap-4 grid grid-cols-2">
               <div className="bg-blue-500 p-4 rounded-2xl text-white">
                  <Code className="mb-2 w-8 h-8" />
                  <h4 className="mb-1 font-medium">Programming</h4>
                  <p className="opacity-90 text-sm">120+ courses</p>
               </div>
               <div className="bg-purple-500 p-4 rounded-2xl text-white">
                  <Palette className="mb-2 w-8 h-8" />
                  <h4 className="mb-1 font-medium">Design</h4>
                  <p className="opacity-90 text-sm">85+ courses</p>
               </div>
               <div className="bg-green-500 p-4 rounded-2xl text-white">
                  <BarChart2 className="mb-2 w-8 h-8" />
                  <h4 className="mb-1 font-medium">Business</h4>
                  <p className="opacity-90 text-sm">95+ courses</p>
               </div>
               <div className="bg-red-500 p-4 rounded-2xl text-white">
                  <Globe className="mb-2 w-8 h-8" />
                  <h4 className="mb-1 font-medium">Languages</h4>
                  <p className="opacity-90 text-sm">70+ courses</p>
               </div>
            </div>
         </div>

         {/* Popular Courses */}
         <div className="mb-6 px-5">
            <h3 className="mb-4 font-medium text-lg">Popular Courses</h3>
            <div className="space-y-4">
               <CourseList>
                  <CourseListPrice />
               </CourseList>
               <CourseList>
                  <CourseListPrice />
               </CourseList>
            </div>
         </div>
         <NavigationBar />
      </div>
   );
}
