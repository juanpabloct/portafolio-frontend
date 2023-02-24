import { ReactNode, useState } from "react";
interface TabsProps {
  element: ReactNode;
  name: string;
}
export const Tabs = ({ tabs }: { tabs: TabsProps[] }) => {
  const [showTab, setShowTab] = useState(0);
  return (
    <div className="w-full h-full flex flex-col justify-start items-center relative gap-20 mt-7">
      <div className="flex  top-4  w-2/3 justify-around border-b pb-1 border-[#5c6d93]">
        {tabs.map((tab, i) => {
          const isEqual = i === showTab;
          return (
            <section
              onClick={() => setShowTab(i)}
              key={i}
              className={`flex items-center border-b-2   pb-1 py-4 ${
                isEqual && "border-[#5c6d93]"
              }`}
            >
              <span
                className={`rounded-full border  border-[#5c6d93] select-none px-2 h-8 flex items-center justify-center  ${
                  isEqual ? "bg-[#5c6d93] text-white" : "text-[#5c6d93]"
                } w-full cursor-pointer py-4`}
              >
                {tab.name}
              </span>
            </section>
          );
        })}
      </div>
      {tabs[showTab].element}
    </div>
  );
};
