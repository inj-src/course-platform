const data = {
   status: "ENUMS" as "popular" | "trending" | "new",
   category: "ENUMS" as "programming" | "academics" | "language" | "creative" | "etc",
   tutor: "teacher_id",
   bannerURL: "string",
   rating: "number like 4.3",
   duration: "string in hours",
   price: "number like 940",
   discountPrice: "number like 400",
   students: "student_id[]",
   description: "string",
   bulletPoints: "string[]",
   reviews: "review_id[]",
   timeStamp: "string/number",
   name: "string",
   chapters: [
      {
         index: 1,
         name: "string",
         lessons: [
            {
               index: 1,
               name: "string",
               overview: "string",
               type: "video" as "video" | "document",
               objectives: "string[]",
               videoUrl: "string",
               documentUrl: "string",
               documentName: "string",
               attachments: [
                  {
                     name: "string",
                     url: "string",
                  },
               ],
            },
         ],
      },
   ],
};

export default data;
