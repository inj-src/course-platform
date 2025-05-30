import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

export function ChapterWrapper({ children }: { children: React.ReactNode }) {
   return (
      <Accordion collapsible type="single">
         <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="hover:no-underline">
               <div>
                  <h3 className="font-medium">1. Introduction to UX Design</h3>
                  <p className="text-gray-500 text-sm">4/5 complete</p>
               </div>
            </AccordionTrigger>
            <AccordionContent>
               <ul className="space-y-3">{children}</ul>
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   );
}
