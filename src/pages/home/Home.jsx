import React from "react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import TabbedMenu from "../../components/TabbedMenu/TabbedMenu";
import {
  Header,
  Hero,
  PlayingNow,
  UpComing,
  TopRated,
  Footer,
} from "../../containers";

const Home = () => {
  const tabs = [
    { label: "Playing Now", component: <PlayingNow /> },
    { label: "Upcoming", component: <UpComing /> },
    { label: "Top Rated", component: <TopRated /> },
  ];

  return (
    <>
      <Header />
      <Hero />
      <TabbedMenu tabs={tabs} />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
