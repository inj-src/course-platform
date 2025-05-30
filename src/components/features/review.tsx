"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface ReviewProps {
   name: string;
   avatarUrl?: string;
   rating: number;
   text: string;
   courseName?: string;
   timeAgo: string;
}

export function Review({ name, avatarUrl, rating, text, courseName, timeAgo }: ReviewProps) {
   return (
      <div className="p-4 border border-gray-200 rounded-lg">
         <div className="flex gap-3">
            <Avatar className="w-12 h-12">
               <AvatarImage src={avatarUrl} alt={name} />
               <AvatarFallback>
                  {name
                     .split(" ")
                     .map((part) => part[0])
                     .join("")}
               </AvatarFallback>
            </Avatar>
            <div>
               <h3 className="font-semibold text-base">{name}</h3>
               <div className="flex gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                     <Star
                        key={i}
                        size={16}
                        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                     />
                  ))}
               </div>
            </div>
         </div>
         <p className="mt-3 text-gray-700">{text}</p>
         <div className="flex gap-2 mt-2">
            {courseName && <span className="text-gray-600 text-sm">{courseName}</span>}
            <span className="ml-auto text-gray-400 text-sm">•</span>
            <span className="text-gray-400 text-sm shrink-0">{timeAgo}</span>
         </div>
      </div>
   );
}
