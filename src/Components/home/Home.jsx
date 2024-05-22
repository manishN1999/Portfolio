import React from "react";
import profileImage from "../assests/profileimg.jpeg";
import "./home.css";

function Home() {
  return (
    <section className="home-page" id="home-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 profile">
            <img src={profileImage} alt="" className="profileimg" />
          </div>
          <div className="col-md-6">
            <div className="info">
              <p className="front-sec typewriter"> Hi, My Name is </p>
              <h1 className="name typewriter"> S Manish Nair </h1>
              <h2 className="about-you"> I am a Web Developer </h2>

              <a className="btn btn-outline-primary" href="#portfolio">
                View Portfolio
              </a>
              <a className="btn btn-outline-dark" href="#footer">
                Hire Me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
