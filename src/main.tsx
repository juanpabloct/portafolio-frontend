import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextLoginProvider } from "./context/contextLogin";
import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import { reducerSession } from "./reducers/Reducer.sessions";
import { Provider } from "react-redux";
const allReducers = combineReducers({ session: reducerSession.reducer });
const storeReducers = configureStore({
  reducer: allReducers,
});
const store = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <ContextLoginProvider>
      <Provider store={storeReducers}>
        <App />
      </Provider>
    </ContextLoginProvider>
  </React.StrictMode>
);
