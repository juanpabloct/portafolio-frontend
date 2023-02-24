import "./App.css";
import { Header } from "./components/header/header";

import { Login } from "./components/forms/login";
import { Tabs } from "./components/Utilities/tabs";
import { CreateUser } from "./components/forms/createUser";
import { useSession } from "./customHooks/customHookSession";
import { Notification } from "./components/Utilities/notification";

function App() {
  const { show } = useSession().correct;
  console.log(show);

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-t  to-white via-white from-[#d4ddf8]">
      <Header />
      <main className="h-full w-full flex flex-col relative">
        <Notification />
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
      </main>
    </div>
  );
}

export default App;
