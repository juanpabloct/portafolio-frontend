import { ReactNode, useState } from "react";

export const Collapse = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="border-2 border-zinc-500 w-2/4 rounded-t-md rounded-b-md">
      <div
        className="flex justify-between items-center border-b border-black px-4 cursor-pointer"
        onClick={() => {
          setShowInfo((current) => !current);
        }}
      >
        <h3>{title}</h3>
        <span
          className={`w-3 h-3  border-b-2 border-r-2 border-black ${
            showInfo ? "rotate-45 " : "-rotate-45 "
          } mb-1 transition-transform duration-500`}
        ></span>
      </div>
      <div
        className={`transition-all duration-[1ms] ${
          showInfo ? "visible h-auto" : "invisible h-0 "
        } `}
      >
        {children}
      </div>
    </section>
  );
};
