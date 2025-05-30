import { ChevronRight } from "lucide-react";
import Link from "next/link";

type props = {
   title: string;
   icon?: React.ReactNode;
   children?: React.ReactNode;
   noAction?: boolean;
   href?: string;
};
export function TitleNavigation({ title, href = "/", icon, children, noAction }: props) {
   return (
      <div className="flex justify-between items-center mb-4">
         <h3 className="font-medium text-lg">{title}</h3>
         {children ? (
            children
         ) : noAction ? null : (
            <Link href={href} className="flex items-center">
               {icon || <ChevronRight strokeWidth={2} className="text-gray-500" />}
            </Link>
         )}
      </div>
   );
}
