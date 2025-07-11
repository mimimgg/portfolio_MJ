import React from "react";
import Skip from "../components/Skip";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

function HomeView() {
  return (
    <>
      <Skip />
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}

export default HomeView;
