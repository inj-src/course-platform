import { ChevronRight } from "lucide-react";
import { Button } from "./button";

type props = {
   title: string;
   onClick?: () => void;
   icon?: React.ReactNode;
};
export function TitleNavigation({ title, onClick, icon }: props) {
   return (
      <div className="flex justify-between items-center mb-4">
         <h3 className="font-medium text-lg">{title}</h3>
         <Button onClick={onClick} variant="link" className="flex items-center">
            {icon || <ChevronRight strokeWidth={2} className="text-gray-400" />}
         </Button>
      </div>
   );
}
