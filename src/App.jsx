import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  PlayingNow,
  UpComing,
  TopRated,
  Footer,
  Header,
  Hero
} from "./containers/";
import "./App.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header/>
        <Hero />
        <PlayingNow />
        <UpComing/>
        <TopRated />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
