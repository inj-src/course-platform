import { ChapterWrapper } from "@/components/features/content/chapterWrapper";
import { LessonFile } from "@/components/features/content/lessonFile";
import { LessonVideo } from "@/components/features/content/lessonVideo";

export function Content() {
   return (
      <div>
         <div className="flex justify-between items-center mt-4">
            <h2 className="font-semibold text-xl">5 Chapters</h2>
            <p className="text-gray-500">• 24 lessons</p>
         </div>

         <ChapterWrapper>
            <LessonVideo />
            <LessonVideo />
            <LessonVideo />
            <LessonFile />
         </ChapterWrapper>
         <ChapterWrapper>
            <LessonVideo />
            <LessonVideo />
            <LessonVideo />
            <LessonFile />
         </ChapterWrapper>
      </div>
   );
}
