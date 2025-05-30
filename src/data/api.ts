import { Course, Teacher, Student, User, Review } from "./types";
import { dummyCourses, dummyTeachers, dummyStudents, dummyUsers, dummyReviews } from "./dummyData";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Course related functions
export async function getCourseById(id: string): Promise<Course | null> {
   await delay(1000);
   return dummyCourses.find((course) => course.id === id) || null;
}

export async function getCoursesByCategory(category: Course["category"]): Promise<Course[]> {
   await delay(1000);
   return dummyCourses.filter((course) => course.category === category);
}

export async function getCoursesByStatus(status: Course["status"]): Promise<Course[]> {
   await delay(1000);
   return dummyCourses.filter((course) => course.status === status);
}

export async function getCoursesByTeacher(teacherId: string): Promise<Course[]> {
   await delay(1000);
   return dummyCourses.filter((course) => course.tutor === teacherId);
}

// Teacher related functions
export async function getTeacherById(id: string): Promise<Teacher | null> {
   await delay(1000);
   return dummyTeachers.find((teacher) => teacher.id === id) || null;
}

export async function getTeacherByUserId(userId: string): Promise<Teacher | null> {
   await delay(1000);
   return dummyTeachers.find((teacher) => teacher.user === userId) || null;
}

export async function getTopTeachers(limit: number = 5): Promise<Teacher[]> {
   await delay(1000);
   return [...dummyTeachers].sort((a, b) => b.averageRating - a.averageRating).slice(0, limit);
}

// Student related functions
export async function getStudentById(id: string): Promise<Student | null> {
   await delay(1000);
   return dummyStudents.find((student) => student.id === id) || null;
}

export async function getStudentByUserId(userId: string): Promise<Student | null> {
   await delay(1000);
   return dummyStudents.find((student) => student.user === userId) || null;
}

export async function getStudentCourses(studentId: string): Promise<Course[]> {
   await delay(1000);
   const student = await getStudentById(studentId);
   if (!student) return [];

   return dummyCourses.filter((course) => student.coursesPurchased.includes(course.id));
}

// User related functions
export async function getUserById(id: string): Promise<User | null> {
   await delay(1000);
   return dummyUsers.find((user) => user.id === id) || null;
}

// Review related functions
export async function getReviewById(id: string): Promise<Review | null> {
   await delay(1000);
   return dummyReviews.find((review) => review.id === id) || null;
}

export async function getCourseReviews(courseId: string): Promise<Review[]> {
   await delay(1000);
   return dummyReviews.filter((review) => review.courseId === courseId);
}

export async function getTeacherReviews(teacherId: string): Promise<Review[]> {
   await delay(1000);
   const teacher = await getTeacherById(teacherId);
   if (!teacher) return [];
   return dummyReviews.filter((review) => teacher.reviews.includes(review.id));
}

// Search and filter functions
export async function searchCourses(query: string): Promise<Course[]> {
   await delay(1000);
   const lowerQuery = query.toLowerCase();
   return dummyCourses.filter(
      (course) =>
         course.name?.toLowerCase().includes(lowerQuery) ||
         course.description.toLowerCase().includes(lowerQuery)
   );
}

export async function filterCoursesByPriceRange(
   minPrice: number,
   maxPrice: number
): Promise<Course[]> {
   await delay(1000);
   return dummyCourses.filter((course) => course.price >= minPrice && course.price <= maxPrice);
}
