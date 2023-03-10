import { CreateUser } from "../components/forms/createUser";
import { Login } from "../components/forms/login";
import { justificar, Tabs, types } from "../components/Utilities/tabs";
export const daata = "";
export const AccesUser = () => {
  return (
    <Tabs
      width={"50%"}
      type={types.without_borders}
      justify={justificar.center}
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
