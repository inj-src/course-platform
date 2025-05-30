"use client";

import { Review } from "@/components/features/review";
import { Star } from "lucide-react";
import { useState } from "react";

const reviews = [
   {
      name: "Emma Wilson",
      rating: 5,
      text: "Great course structure and very engaging teaching style.",
      timeAgo: "1 week ago",
   },
   {
      name: "John Doe",
      rating: 4,
      text: "Very informative content, but some sections could be more detailed.",
      timeAgo: "2 weeks ago",
   },
   {
      name: "Sarah Smith",
      rating: 5,
      text: "Excellent course! The practical examples really helped me understand the concepts.",
      timeAgo: "3 weeks ago",
   },
];

export function Reviews() {
   const [selectedRating, setSelectedRating] = useState<number | null>(null);

   const filteredReviews = selectedRating
      ? reviews.filter((review) => review.rating === selectedRating)
      : reviews;

   return (
      <div className="space-y-4 px-5 pt-2 pb-10 •">
         <div className="flex gap-2 overflow-x-auto">
            {[5, 4, 3, 2, 1].map((rating) => (
               <button
                  key={rating}
                  onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full border 
                     ${
                        selectedRating === rating
                           ? "border-yellow-400 bg-yellow-50 text-yellow-700"
                           : "border-gray-200 hover:bg-gray-50"
                     }`}
               >
                  <Star
                     size={16}
                     className={
                        selectedRating === rating
                           ? "fill-yellow-400 text-yellow-400"
                           : "text-gray-400"
                     }
                  />
                  <span className="text-sm">{rating}</span>
               </button>
            ))}
         </div>

         {filteredReviews.map((review, index) => (
            <Review
               key={index}
               name={review.name}
               rating={review.rating}
               text={review.text}
               timeAgo={review.timeAgo}
            />
         ))}
      </div>
   );
}
