import React from "react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import TabbedMenu from "../../components/TabbedMenu/TabbedMenu";
import { useCookies } from "react-cookie";
import {
  Header,
  Hero,
  PlayingNow,
  UpComing,
  TopRated,
  Footer,
} from "../../containers";
import '../../App.css'

const Home = () => {
  const tabs = [
    { label: "Upcoming", component: <UpComing /> },
    { label: "Playing Now", component: <PlayingNow /> },
    { label: "Top Rated", component: <TopRated /> },
  ];

  const [cookies, setCookie] = useCookies(["token"]);

  console.log(cookies);

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
