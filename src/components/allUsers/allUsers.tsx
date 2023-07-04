import { User } from "../../types/responseLoginUser";
import { FlexCol, FlexRow } from "../styles";
import { Grid } from "../styles/grid";
import { Targets } from "./targets";

export const AllUsers = ({ information }: { information: User[] }) => {
  if (information.length === 0) {
    return <h1>No hay Datos</h1>;
  }
  return (
    <FlexRow className=" flex-wrap justify-around gap-y-5">
      {information.map((user, i) => {
        return <Targets user={user} key={(i = user.id)} />;
      })}
    </FlexRow>
  );
};
