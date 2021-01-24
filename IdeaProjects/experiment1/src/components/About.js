import React from 'react';
import "../styles/About.css";
import {FaLinkedinIn, FaGithub, FaPinterest} from 'react-icons/fa';

function About() {
  return (
  <div className="content-container">

  <div className="section-container" id="about">
    <div className="section-title">hi, i'm clara ☕</div>
    <div className="section-text">
      zoomer student & coffee chugger. i'm obsessed with honeydew-flavoured candy and collecting a rainbow of Lindt chocolate wrappers
      <br></br>
      <br></br>
      virtual globaltrotter currently residing between Toronto and Montreal. i study cs and economics at McGill university, expecting graduation summer 2021
      <br></br>
      <br></br>
      <div className="pink-highlight">
        my mission is to create wonderful useful tools that draw out opportunities for people around the globe
      </div>
      <br></br><br></br>
    </div>
  </div>

  <div className="section-container-dark" id="vision">
    <div className="section-title">vision 🚀</div>
      <div className="section-text-dark">
        how would i describe myself?
        <br></br>
        <li>dynamic</li>
        <li>team builder</li>
        <li>reliable</li>
        <br></br>
        i'm fascinated by the intersection between economics, technology, and art.
        three industries that are constantly morphing and continuously converging.
        i believe the time we have is precious, and that the best use of it is by uplifting our communities.. one line of code at a time!
        <br></br><br></br>
        <div className="blue-highlight">
          my expertise includes business intelligence and full stack software development, but i also freelance in art & design
        </div>
                <a href="https://drive.google.com/file/d/1jrO52kN-ihz59b82jjJZuOkwe2MOU44b/view?usp=sharing" target="_blank">resume</a>
        <br></br><br></br>
      </div>
    </div>

    <div className="section-container" id="contact">
      <div className="section-title">let's chat 📝</div>
      <div className="section-text">
        i'm always on the lookout for a new book recommendation, an underground indie band, or just to bounce around some ideas! let's get connected below
        <br></br><br></br>
        <div className="orange-highlight">
          exploring three.js has been so much fun, and i'd love to collaborate on the next UI/UX project together
        </div>
        <br></br><br></br>

        <div className="icon">
          <a href="https://www.linkedin.com/in/clarajchu/" target="_blank"><FaLinkedinIn size="3em"/></a>
          <a href="https://github.com/armydillo0/take0/tree/main/IdeaProjects/experiment1" target="_blank"><FaGithub size="3em"/></a>
          <a href="https://www.pinterest.ca/clarajchu" target="_blank"><FaPinterest size="3em"/></a>
        </div>

        <br></br><br></br>
      </div>
    </div>

    <div className="play-container" id="play">
      <br></br><br></br>
      <div className="play-game"></div>
      <div className="play-text">3d objects i made to practise texture & lighting</div>
    </div>

  </div>
  );
}
export default About;