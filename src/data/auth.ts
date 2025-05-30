import { User } from "./types";
import { dummyUsers, dummyStudents, dummyTeachers } from "./dummyData";

const LOCAL_STORAGE_KEY = "course_platform_user";

export interface AuthUser extends User {
   role: "student" | "teacher";
   profileId: string; // studentId or teacherId
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function login(
   email: string,
   password: string
): Promise<{
   success: boolean;
   user?: AuthUser;
   message?: string;
}> {
   await delay(1000); // Simulate API call
   console.log(password);

   const user = dummyUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());

   if (!user) {
      return {
         success: false,
         message: "Invalid email or password",
      };
   }

   // In real app, we'd check password hash here
   // For dummy data, we'll accept any password

   // Check if user is a teacher or student
   const teacher = dummyTeachers.find((t) => t.user === user.id);
   const student = dummyStudents.find((s) => s.user === user.id);

   const authUser: AuthUser = {
      ...user,
      role: teacher ? "teacher" : "student",
      profileId: teacher ? teacher.id : student ? student.id : "",
   };

   // Save to localStorage
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(authUser));

   return {
      success: true,
      user: authUser,
   };
}

export async function logout(): Promise<void> {
   await delay(500); // Simulate API call
   localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export function getCurrentUser(): AuthUser | null {
   const userData = localStorage.getItem(LOCAL_STORAGE_KEY);
   if (!userData) return null;

   try {
      return JSON.parse(userData) as AuthUser;
   } catch {
      return null;
   }
}

export async function isAuthenticated(): Promise<boolean> {
   await delay(100);
   return getCurrentUser() !== null;
}

// Helper function to require authentication
export async function requireAuth(): Promise<AuthUser> {
   const user = getCurrentUser();
   if (!user) {
      throw new Error("Authentication required");
   }
   return user;
}

// Check if the current user is a teacher
export async function isTeacher(): Promise<boolean> {
   const user = getCurrentUser();
   return user?.role === "teacher";
}

// Check if the current user is a student
export async function isStudent(): Promise<boolean> {
   const user = getCurrentUser();
   return user?.role === "student";
}
