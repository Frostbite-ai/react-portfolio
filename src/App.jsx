import React from "react";
import Intro from "./components/intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/timeline";
import Footer from "./components/footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
