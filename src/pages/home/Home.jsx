import React from "react";
import { SearchBar } from "../../components";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import {
  Header,
  Hero,
  PlayingNow,
  UpComing,
  TopRated,
  Footer,
} from "../../containers";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SearchBar />
      <PlayingNow />
      <UpComing />
      <TopRated />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
