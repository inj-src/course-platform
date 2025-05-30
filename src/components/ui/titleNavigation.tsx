import { ChevronRight } from "lucide-react";
import { Button } from "./button";

type props = {
   title: string;
   onClick?: () => void;
   icon?: React.ReactNode;
   children?: React.ReactNode;
   noAction?: boolean;
};
export function TitleNavigation({ title, onClick, icon, children, noAction }: props) {
   return (
      <div className="flex justify-between items-center mb-4">
         <h3 className="font-medium text-lg">{title}</h3>
         {children ? (
            children
         ) : noAction ? null : (
            <Button onClick={onClick} variant="link" className="flex items-center">
               {icon || <ChevronRight strokeWidth={2} className="text-gray-500" />}
            </Button>
         )}
      </div>
   );
}
