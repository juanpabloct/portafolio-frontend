import "./App.css";
import { Header } from "./components/header/header";

import { Login } from "./components/forms/login";
import { Tabs } from "./components/Utilities/tabs";
import { CreateUser } from "./components/forms/createUser";
import { useSession } from "./customHooks/customHookSession";
import { Notification } from "./components/Utilities/notification";
import { AccesUser } from "./pages/accesUser";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Home } from "./pages/home";

function App() {
  const { show } = useSession().correct;
  console.log(show);

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-t  to-white via-white from-[#d4ddf8]">
      <Header />
      <main className="h-full w-full flex flex-col relative">
        <Notification />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AccesUser />} />
            <Route path="*" element={<p>Pagina No encontrada</p>} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
