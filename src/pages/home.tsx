import { useEffect, useState } from "react";
import { Collapse } from "../components/Utilities/collapse";
import { justificar, Tabs, types } from "../components/Utilities/tabs";
import { User } from "../types/responseLoginUser";
import { connect } from "../util/conectionApi";

export const Home = () => {
  const [information, setInformation] = useState<User[]>([]);
  useEffect(() => {
    const getData = async () => {
      const petition = await connect.get("/users");
      setInformation(petition.data);
    };
    getData();
  }, []);
  return (
    <section>
      <Tabs
        width={"50%"}
        type={types.line}
        justify={justificar.justifyEvenly}
        tabs={[
          {
            name: "Usuarios",
            element: (
              <Collapse title="SDFSDF">
                <div>Holaaa</div>
              </Collapse>
            ),
          },
          { name: "Projectos", element: <div>Projectos</div> },
        ]}
      />
    </section>
  );
};
