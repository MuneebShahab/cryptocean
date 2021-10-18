import React from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Donation from "./pages/Donation";
import FAQ from "./pages/FAQ";
import Header from "./pages/Header";
import MintBox from "./pages/MintBox";
import PlayToEarn from "./pages/PlayToEarn";
import SailMap from "./pages/SailMap";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Header />
        <MintBox />
        <About />
        <Donation />
        <SailMap />
        <Team />
        <PlayToEarn />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default App;
