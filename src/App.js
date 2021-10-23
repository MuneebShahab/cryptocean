import React, { useEffect } from "react";
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
import $ from 'jquery'

const App = () => {
  // useEffect(()=>{
  //   var OSName="Unknown OS";
  //   if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
  //   if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
  //   if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
  //   if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
  //   if(OSName==="MacOS"){
  //   var abc=document.getElementsByClassName("sailmap-animate");
  //   abc[0].style.top = '45px';
  //   abc[0].style.width= "55%"
  //   };
  // },[])
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
