import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { LayoutGrid, LayoutList } from "lucide-react";

type viewType = "flex" | "grid";
type propsType = {
   callBack: (type: viewType) => void;
};
export function ViewToggle({ callBack }: propsType) {
   const [type, setType] = useState<viewType>("grid");
   useEffect(() => {
      callBack(type);
   }, [type, callBack]);
   return (
      <div className="flex">
         <Button
            variant="link"
            onClick={() => setType("flex")}
            className={type == "flex" ? "bg-blue-100" : ""}
         >
            <LayoutList className={type == "flex" ? "text-blue-500" : "text-gray-500"} />
         </Button>
         <Button
            variant="link"
            onClick={() => setType("grid")}
            className={type == "grid" ? "bg-blue-100" : ""}
         >
            <LayoutGrid className={type == "grid" ? "text-blue-500" : "text-gray-500"} />
         </Button>
      </div>
   );
}
