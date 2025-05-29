type props = {
   children: React.ReactNode;
   name: string;
};
export function CategoryCircular({ name, children }: props) {
   return (
      <div className="flex flex-col items-center">
         <div className="flex justify-center items-center bg-gray-100 mb-1 rounded-full w-12 [&>*]:w-5 h-12 [&>*]:h-5">
            {children}
         </div>
         <span className="text-xs">{name}</span>
      </div>
   );
}
