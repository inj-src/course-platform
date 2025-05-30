import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutGrid } from "lucide-react";

export function ProfileHeader() {
   return (
      <div className="mb-4 px-5 py-3 border-gray-100 border-b">
         <div className="flex items-center gap-4">
            <Avatar className="rounded-md w-9 h-9">
               <AvatarImage src="https://github.com/shadcn.png" />
               <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="font-bold text-xl">Alex</h2>
         </div>
         <div className="flex items-center gap-3 mt-3 font-semibold text-gray-500 text-sm">
            <LayoutGrid className="text-gray-500" size={16} />
            <h3>Switch to Teacher Mode</h3>
         </div>
      </div>
   );
}
