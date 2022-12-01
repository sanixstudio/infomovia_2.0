import React from "react";
import { SearchBar } from "../../components";
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
    </div>
  );
};

export default Home;
