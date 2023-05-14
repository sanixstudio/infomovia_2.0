import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About, Home, Single } from "./pages";
import RegistePage from "./pages/registerPage/RegisterPage";
import WishList from "./pages/wishList/wishList";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<RegistePage />} />
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/:id" element={<Single />} />
          <Route path="/*" element={<h1>404: Page not found</h1>} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
