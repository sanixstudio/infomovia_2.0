import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  PlayingNow,
  UpComing,
  TopRated,
  Footer,
  Header,
  Hero
} from "./containers/";
import "./App.css";
import Search from "./components/Search/Search";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Hero />
        <Search/>
        <PlayingNow />
        <UpComing />
        <TopRated />
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
