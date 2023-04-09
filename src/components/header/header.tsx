import { Link } from "react-router-dom";
import { LinkStyle } from "../linkStyle";
import { FlexCol } from "../styles/flexCol";
import { FlexRow } from "../styles/flexRow";
import { HeaderNav } from "../styles/headerNav";
import { Notification } from "../Utilities/notification";

export const Header = () => {
  return (
    <HeaderNav className="">
      <FlexRow className=" text-xl pl-4 w-full   justify-between bg-black py-2 items-center">
        <nav className="h-full text-2xl pl-4 text-[#efdbdb]">
          <h1>My Portafolio</h1>
        </nav>
        <FlexRow className="w-min text-lg pr-10 ">
          <LinkStyle title="Login" to="/login" />
          <LinkStyle title="Home" to="/" />
        </FlexRow>
      </FlexRow>
    </HeaderNav>
  );
};
