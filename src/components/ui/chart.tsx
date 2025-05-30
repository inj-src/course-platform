type props = {
   data: number[];
};
export function Chart({ data }: props) {
   return (
      <ul className="flex items-end gap-1 mx-5">
         {data.map((item, index) => {
            return (
               <li
                  key={index}
                  className="bg-blue-500 rounded-t-sm w-full"
                  style={{ height: item }}
               />
            );
         })}
      </ul>
   );
}
