import { ReactNode, useState } from "react";
interface TabsProps {
  element: ReactNode;
  name: string;
}
export enum types {
  "round" = "round",
  "line" = "line",
  "without_borders" = "without_borders",
}
export enum justificar {
  "justifyBetween" = "justify-between",
  "justifyAround" = "justify-around",
  "justifyEvenly" = "justify-evenly",
}
export const Tabs = ({
  tabs,
  type = types.round,
  width = "40%",
  justify = justificar.justifyBetween,
}: {
  tabs: TabsProps[];
  type?: types;
  width?: string;
  justify?: justificar;
}) => {
  const [showTab, setShowTab] = useState(0);
  const { line, round, without_borders } = types;
  return (
    <div className="w-full h-full flex flex-col justify-start items-center relative gap-20 mt-7">
      <div
        className={`flex  top-4  ${justify}  pb-1 border-2 rounded-xl border-[#5c6d93] h-16 items-center`}
        style={{ width: width }}
      >
        {tabs.map((tab, i) => {
          const isEqual = i === showTab;
          return (
            <section
              onClick={() => setShowTab(i)}
              key={i}
              className={`flex items-center border-b-4 relative -bottom-1 pb-1 ${
                i === 0 ? "ml-10" : tabs.length - 1 === i && "mr-10"
              }  ${isEqual && "border-[#5c6d93]"}`}
            >
              <span
                className={`${
                  type === round ? "rounded-2xl" : type === line && "rounded-md"
                } border ${
                  types.without_borders !== type
                    ? "border-[#5c6d93]"
                    : "border-none"
                } select-none px-2 h-8 flex items-center justify-center  ${
                  isEqual
                    ? type === types.without_borders
                      ? "bg-white "
                      : `bg-[#5c6d93] text-white`
                    : "text-[#5c6d93]"
                } w-full cursor-pointer `}
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
