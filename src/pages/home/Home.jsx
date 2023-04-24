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
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  const tabs = [
    { label: "Upcoming", component: <UpComing /> },
    { label: "Playing Now", component: <PlayingNow /> },
    // { label: "Top Rated", component: <TopRated /> },
    { label: "Gallery", component: <Gallery /> },
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
