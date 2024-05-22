import React from "react";
import "./portfolio.css";
import Works from "./works";

function Portfolio() {
  return (
    <section className="work-section" id="portfolio">
      <h2 className="section-title"> Portfolio</h2>
      <p className="section-subtitle"> Most recent works</p>

      <Works />
    </section>
  );
}

export default Portfolio;
