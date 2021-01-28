import React from "react";
import "./index.css";
import Portfolio from "./components/Header";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollToTop";

function App() {
 

  return (
    <>
      <div>
        <Portfolio />
        <Footer />
        <ScrollArrow />
      </div>
    </>
  );
}

export default App;
