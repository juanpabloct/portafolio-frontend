import { CreateUser } from "../components/forms/createUser";
import { Login } from "../components/forms/login";
import { Tabs } from "../components/Utilities/tabs";
export const daata = "";
export const Accesos = () => {
  return (
    <Tabs
      tabs={[
        {
          element: (
            <section className="App justify-center  flex  w-1/2  max-w-[624px]  h-[20rem] shadow-md shadow-zinc-500 border border-zinc-300 rounded-md items-center bg-white">
              <Login />
            </section>
          ),
          name: "Login",
        },
        {
          element: (
            <section className="App justify-center   flex  w-1/2  max-w-[624px]  h-[20rem] shadow-md shadow-zinc-500 border border-zinc-300 rounded-md items-center bg-white">
              <CreateUser />
            </section>
          ),
          name: "Crear Usuario",
        },
      ]}
    />
  );
};
