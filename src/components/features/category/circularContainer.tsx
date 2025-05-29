import { Code, Palette, Camera, BarChart2, Leaf, Mic, Globe, BookA } from "lucide-react";
import { CategoryCircular } from "./circular";

export function CircularCategory() {
   return (
      <div className="mb-6 px-5">
         <h3 className="mb-4 font-medium text-lg">Browse Categories</h3>
         <div className="gap-4 grid grid-cols-4">
            <CategoryCircular name="Coding">
               <Code />
            </CategoryCircular>
            <CategoryCircular name="Academics">
               <BookA />
            </CategoryCircular>
            <CategoryCircular name="Design">
               <Palette />
            </CategoryCircular>
            <CategoryCircular name="Photo">
               <Camera />
            </CategoryCircular>

            <CategoryCircular name="Business">
               <BarChart2 />
            </CategoryCircular>
            <CategoryCircular name="Lifestyle">
               <Leaf />
            </CategoryCircular>
            <CategoryCircular name="Speaking">
               <Mic />
            </CategoryCircular>
            <CategoryCircular name="Language">
               <Globe />
            </CategoryCircular>
         </div>
      </div>
   );
}
