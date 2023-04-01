import React from "react";
import HeroBanner from "../components/HeroBanner";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="fluid-container">
      <Navbar />
      <div className="row">
        <div className="col-2 menu leftmenu">
          <Menu />
        </div>
        <div className="col-10">
          <HeroBanner />
        </div>
      </div>
    </div>
  );
}

export default Home;
