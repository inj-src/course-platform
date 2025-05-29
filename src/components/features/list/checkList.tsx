import { CheckMark } from "@/components/ui/checkMark";

export default function CheckList() {
   return (
      <ul className="space-y-3">
         <ListItem text="Build responsive websites using modern HTML5 and CSS3" />
         <ListItem text="Create dynamic web applications with React and Redux" />
         <ListItem text="Backend development with Node.js and Express" />
         <ListItem text="Master JavaScript ES6+ and modern development practices" />
         <ListItem text="Deploy and maintain web applications" />
      </ul>
   );
}

function ListItem({ text }: { text: string }) {
   return (
      <li className="flex gap-2">
         <CheckMark className="mt-1" />
         <span className="text-gray-700">{text}</span>
      </li>
   );
}
