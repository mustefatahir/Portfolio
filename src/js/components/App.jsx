import React from "react";
import Header from "./Header";
import About from "./Aboutme";
import Services from "./Services";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Skills from "./Skills";
import Footer from "./Footer";
import Footer2 from "./Footer2";
function App() {
  return (
    <div>
      <Header/>
      <About />
      <Services/>
      <Skills/>
      <Gallery/>
      <Counter/>
      <Footer/>
      <Footer2/>
    </div>
  );
}
export default App;
