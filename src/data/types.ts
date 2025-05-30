export interface Teacher {
   id: string;
   name: string;
   intro: string;
   user: string;
   allTimeStudents: number;
   timeStamp: number;
   averageRating: number;
   activeCourses: string[];
   bio: string;
   teachingHours: number;
   completionRate: number;
   reviews: string[];
}

export interface User {
   id: string;
   name: string;
   email: string;
   phone: string;
   dateOfBirth: string;
}

export interface Student {
   id: string;
   user: string;
   instituteName: string;
   coursesPurchased: string[];
   reviews: string[];
}

export interface Review {
   id: string;
   userId: string;
   courseId: string;
   rating: number;
   text: string;
   timeStamp: number;
}

export interface Course {
   id: string;
   name: string;
   status: "popular" | "trending" | "new";
   category: "programming" | "academics" | "language" | "creative" | "etc";
   tutor: string;
   bannerURL: string;
   rating: number;
   duration: string;
   price: number;
   discountPrice: number;
   students: string[];
   description: string;
   bulletPoints: string[];
   reviews: string[];
   timeStamp: number;
   chapters: Chapter[];
}

export interface Chapter {
   index: number;
   name: string;
   lessons: Lesson[];
}

export interface Lesson {
   index: number;
   name: string;
   overview: string;
   type: "video" | "document";
   objectives: string[];
   videoUrl: string;
   documentUrl: string;
   documentName: string;
   attachments: Attachment[];
}

export interface Attachment {
   name: string;
   url: string;
}
