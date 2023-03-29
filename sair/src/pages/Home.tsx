import React from "react";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="fluid-container">
      <Navbar />
      <div className="row">
        <div className="col-2">
          <Menu />
        </div>
        <div className="col-10">
          <HeroBanner />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
