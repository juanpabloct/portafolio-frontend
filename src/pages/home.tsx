import { useEffect, useState } from "react";
import { Collapse } from "../components/Utilities/collapse";
import { justificar, Tabs, types } from "../components/Utilities/tabs";
import { User } from "../types/responseLoginUser";
import { connect } from "../util/conectionApi";
import profile from "../assets/icons/profile/profile.svg";

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
    <section className="h-full">
      <Tabs
        width={"50%"}
        type={types.without_borders}
        justify={justificar.start}
        tabs={[
          {
            name: "Usuarios",
            element: (
              <div className="w-1/2 flex flex-col justify-between h-full ">
                {information.map((user, i) => {
                  const { email, information, users_address, Photo } = user;

                  return (
                    <div
                      key={i}
                      className="flex border border-black w-full py-2 px-1 rounded-md gap-4 bg-white shadow-sm shadow-neutral-800"
                    >
                      <div>
                        <img
                          src={user.Photo ? user.Photo.url : profile}
                          alt=""
                          className="rounded-full h-10 border border-black"
                        />
                      </div>
                      {information && users_address ? (
                        <div>
                          <p>
                            {information.name} {information.lastName}
                          </p>
                          <p>
                            {users_address.city} {users_address.directions}{" "}
                            {users_address.department} {users_address.country}
                          </p>
                        </div>
                      ) : (
                        <div>No hay informacion</div>
                      )}
                    </div>
                  );
                })}
              </div>
            ),
          },
          { name: "Projectos", element: <div>Projectos</div> },
        ]}
      />
    </section>
  );
};
