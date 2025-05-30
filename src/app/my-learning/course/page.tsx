import { CourseIndex } from "./courseIndex";
import { Lesson } from "./lesson";

type props = {
   searchParams: { [key: string]: string | string[] | undefined };
};
export default function Page({ searchParams }: props) {
   const { courseId, chapterIndex, lessonId } = searchParams;
   // if (courseId && chapterIndex && lessonId) return <Lesson />;
   // if (courseId) return <CourseIndex />;
   // return <p>Hello world</p>;
   return <Lesson />;
}
