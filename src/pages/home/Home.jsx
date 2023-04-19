import React from "react";
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
      <PlayingNow />
      <UpComing />
      <TopRated />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
