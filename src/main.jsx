import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/userContext";
import { About, RegisterPage, Single } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/:id",
    element: <Single />,
  },
  {
    path: "*",
    element: <h1>Error 404: page not found</h1>,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);
