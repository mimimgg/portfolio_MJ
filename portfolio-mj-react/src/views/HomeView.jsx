import React from "react";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Banner from "../components/Banner";
import About from "../components/About";

function HomeView() {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Banner />
        <About />
        <Portfolio />
      </Main>
      <Footer />
    </>
  );
}

export default HomeView;
