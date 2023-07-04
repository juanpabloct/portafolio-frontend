import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { FlexCol, Footer, Header, Notification } from "./components";
import { AccesUser, Home } from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <FlexCol className="h-full  justify-between min-h-screen">
        <Header />

        <main className="h-[90%] w-full flex flex-col relative bg-[#f3f3f3] flex-1 pt-3">
          <Notification />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AccesUser />} />
            <Route path="*" element={<p>Pagina No encontrada</p>} />
          </Routes>
        </main>
        <Footer />
      </FlexCol>
    </BrowserRouter>
  );
}

export default App;
