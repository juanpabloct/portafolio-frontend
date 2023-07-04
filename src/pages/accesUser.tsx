import { CreateUser, Login, Tabs } from "../components";

export const data = "";
export const AccesUser = () => {
  return (
    <Tabs
      width={"50%"}
      type={"without_borders"}
      justify={"justify-start"}
      tabs={[
        {
          element: (
            <section className="App justify-center  flex  w-1/2  max-w-[624px]  h-auto shadow-md shadow-zinc-500 border border-zinc-300 rounded-md items-center bg-white">
              <Login />
            </section>
          ),
          name: "Login",
        },
        {
          element: (
            <section className="App justify-center   flex  w-1/2  max-w-[624px]  h-auto shadow-md shadow-zinc-500 border border-zinc-300 rounded-md items-center bg-white">
              <CreateUser />
            </section>
          ),
          name: "Crear Usuario",
        },
      ]}
    />
  );
};
