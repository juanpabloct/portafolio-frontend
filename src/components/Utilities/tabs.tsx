import { ReactNode, useEffect, useRef, useState } from "react";
import { FlexCol } from "../styles/flexCol";
import { FlexRow } from "../styles/flexRow";
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
  "start" = "justify-start",
  "center" = "justify-center",
  "end" = "justify-end",
}
export const Tabs = ({
  tabs,
  type = types.round,
  width = "40%",
  justify = justificar.center,
}: {
  tabs: TabsProps[];
  type?: types;
  width?: string;
  justify?: justificar;
}) => {
  const [showTab, setShowTab] = useState(0);
  const { line, round, without_borders } = types;
  const [changeTab, setChangeTab] = useState(false);
  useEffect(() => {
    setChangeTab(false);
  }, [showTab]);
  return (
    <FlexCol className=" h-full  justify-center items-center  gap-10 ">
      <FlexRow
        className={`flex relative  ${justify}  pb-1  rounded-md  items-end  gap-4 h-12 bg-white shadow-md shadow-black`}
        style={{ width: width }}
      >
        {tabs.map((tab, i) => {
          const isEqual = i === showTab;
          return (
            <section
              onClick={() => {
                setShowTab(i);
                setChangeTab(true);
              }}
              key={i}
              className={`flex items-center border-b-4 relative -bottom-1 pb-1 ${
                i === 0 ? "ml-10" : tabs.length - 1 === i && "mr-10"
              }  ${
                isEqual && "border-[#5c6d93]"
              } transition-[border] duration-1000`}
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
                } w-full cursor-pointer transition-all duration-1000 ease-linear`}
              >
                {tab.name}
              </span>
            </section>
          );
        })}
      </FlexRow>
      <FlexRow
        className={`duration-1000 transition-all  justify-center items-start h-4/5 ${
          !changeTab && "animate-changeTab"
        } `}
      >
        {tabs[showTab].element}
      </FlexRow>
    </FlexCol>
  );
};
