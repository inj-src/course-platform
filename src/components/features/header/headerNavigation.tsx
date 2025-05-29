import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type props = {
   title: string;
   backHref: string;
   children?: React.ReactNode;
};
export function HeaderNavigation({ title, backHref, children }: props) {
   return (
      <div className="flex items-center px-4 py-3 border-b">
         <Link href={backHref}>
            <ArrowLeft />
         </Link>
         <h1 className="flex-1 font-medium text-lg text-center">{title}</h1>
         {children || <ArrowLeft className="invisible" />}
      </div>
   );
}
