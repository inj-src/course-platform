import { backNavigationHandler } from "@/lib/capacitor";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export function CapacitorInitializer() {
   const router = useRouter();
   const pathName = usePathname();
   useEffect(() => {
      return backNavigationHandler((closeApp) => {
         if (pathName == "/") closeApp();
         else router.back();
      });
   }, [router, pathName]);
   // useEffect(() => {
   //    setSystemStyle();
   // }, []);
   return null;
}
