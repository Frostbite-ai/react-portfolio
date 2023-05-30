import React from "react";
import Intro from "./components/intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/timeline";
import Footer from "./components/footer";
import Contact from "./components/Contact";
// import PortfolioItems from "./components/PortfolioItems";

function App() {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
