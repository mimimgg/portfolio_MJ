import Skip from "../components/Skip";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
// import Main from "../components/Main";
import Banner from "../components/Banner";
import About from "../components/About/About";

function HomeView() {
  return (
    <>
      <Skip />
      <Header />
      <Banner />
      <main id="main__wrap" className="main__wrap">
        <About />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default HomeView;
