import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HomeHeader() {
   return (
      <div className="flex justify-between items-center mb-4 px-5 py-3 border-gray-100 border-b">
         <h1 className="font-bold text-2xl">BiddyaHaat</h1>
         <Avatar className="w-9 h-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
         </Avatar>
      </div>
   );
}
