import React from "react";
import HTML from "../assests/html.png";
import CSS from "../assests/css.png";
import JavaScript from "../assests/javascript.png";
import ReactImg from "../assests/react.png";
import Bootstrap from "../assests/bootstrap.png";
import GitHub from "../assests/github.png";
import "./skills.css";

function Skills() {
  return (
    <section id="skills-page">
      <div className="container-2">
        <div>
          <p className="heading">My Skills</p>
          <p className="supporting-text">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="head">
          <div className="html skills">
            <img className="html-icon icon" src={HTML} alt="HTML icon" />
            <p className="tag">HTML</p>
          </div>
          <div className="css skills">
            <img className="icon" src={CSS} alt="HTML icon" />
            <p className="tag">CSS</p>
          </div>
          <div className="java skills">
            <img className="icon" src={JavaScript} alt="HTML icon" />
            <p className="tag">JAVASCRIPT</p>
          </div>
          <div className="skills">
            <img className="icon" src={ReactImg} alt="HTML icon" />
            <p className="tag">REACT</p>
          </div>
          <div className="skills">
            <img className="icon" src={GitHub} alt="HTML icon" />
            <p className="tag">GITHUB</p>
          </div>
          <div className="skills">
            <img className="icon" src={Bootstrap} alt="HTML icon" />
            <p className="tag">BOOTSTRAP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
