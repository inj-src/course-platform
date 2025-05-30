import { SearchIcon } from "lucide-react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

export function SearchBar({ className }: { className?: string }) {
   return (
      <div className={cn("mb-6 px-5" + " " + className)}>
         <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
            <SearchIcon className="mr-2 w-5 h-5 text-gray-400" />
            <Input
               type="text"
               placeholder="What do you want to learn?"
               className="bg-transparent shadow-none border-none outline-none w-full text-sm"
            />
         </div>
      </div>
   );
}
