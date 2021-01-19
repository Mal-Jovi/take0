import React from 'react';
import './Pages.css';
import {FaLinkedinIn, FaGithub, FaSpotify} from 'react-icons/fa';

function About() {
  const darkStyle = {
    color: "black",
    marginLeft: "100px",
    listStyleType: "circle",
    width:"750px",

  };
  return (
  <div>
    <div className="title">hi, i'm clara ☕</div>
    <div className="introText">
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
        <br></br><br></br>
        <br></br><br></br>
    </div>
    <div className="title" style={darkStyle}>vision 🚀</div>
    <div className="introText" style={darkStyle}>
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
    </div>

        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
    <div className="title">let's chat 📝</div>
    <div className="introText">
        i'm always on the lookout for a new book recommendation, an underground indie band, or just to bounce around some ideas! let's get connected below
        <br></br><br></br>
        <div className="orange-highlight">
            exploring three.js has been so much fun, and i'd love to collaborate on the next UI/UX project together
        </div>
        <br></br><br></br>
        <a className="icon" href="https://www.linkedin.com/in/clarajchu/"><FaLinkedinIn size="3em"/></a>
        <a className="icon" href="https://github.com/armydillo0/take0/tree/main/IdeaProjects/experiment1"><FaGithub size="3em"/></a>
        <a className="icon" href="https://open.spotify.com/user/22zmnxff74oahigojvp5ky45a"><FaSpotify size="3em"/></a>
     </div>

        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
    <div className="title">thank you ✨</div>
    <div className="introText">for visiting and sharing a moment of your time</div>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>

  </div>
  );
}
export default About;