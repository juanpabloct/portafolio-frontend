import { useEffect, useState } from "react";
import { connect } from "../util/conectionApi";
import profile from "../assets/icons/profile/profile.svg";
import { FlexRow, Tabs } from "../components";
import { User } from "../types/responseLoginUser";
import { AllUsers } from "../components/allUsers/allUsers";

export const Home = () => {
  const [information, setInformation] = useState<User[]>([]);
  const getData = async () => {
    const petition = await connect.get("/users");
    setInformation(petition.data);
  };
  useEffect(() => {
    return () => {
      getData();
    };
  }, []);
  return (
    <section className="h-full">
      <Tabs
        width={"50%"}
        type={"without_borders"}
        justify={"justify-center"}
        tabs={[
          {
            name: "Usuarios",
            element: <AllUsers information={information} />,
          },
          { name: "Projectos", element: <div>Projectos</div> },
        ]}
      />
    </section>
  );
};
