import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/userContext";
import App from "./App";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
