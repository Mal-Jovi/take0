import React from 'react';
import "../styles/About.css";
import { IoDownloadOutline } from "react-icons/io5";
import Buttons from '../components/Buttons';

function About() {

  return (
<div className="content-container">

    <div className="section-container" id="about">
        <div className="section-title">hello, world! ☕</div>
        <div className="section-combine">
            <div className="section-text">
                <p>i'm clara chu, zoomer student & artist. also a honeydew bubble tea connoisseur and Lindt chocolate wrapper collector</p>
                <br></br>
                <p>residing in Montreal, i study cs & economics at McGill university, expecting graduation this summer 2021. i'm looking for full-time opportunities in software development & related fields in design</p>
                <br></br>
                <div className="pink-highlight">
                    my mission is to create wonderful tools that pave out new roadmaps for folks around the globe
                </div>
                <br></br><br></br>
            </div>
            <div className="propic"></div>
        </div>
    </div>


    <div className="section-container" id="vision">
        <div className="section-combine">
        <div className="section-title-dark">vision 🚀</div>
            <div className="section-text-dark">
                <p>i'm fascinated by the intersection in economics, technology, and art. three industries that are continuously morphing & converging:</p>
                <br></br>
                <p> ie. big data analytics ➵ e-commerce & fintech infrastructure ➵ social networks & media consumption ➵ AI agents in economic simulations</p>
                <br></br>
                <p>i want to contribute to this exciting age and help uplift communities.. one line of code at a time! download my resume on the left</p>
                <br></br>
                <div className="blue-highlight">
                    my expertise includes business intelligence and full-stack software development. i also freelance in art & design
                </div>
                <br></br><br></br>
            </div>
            <div className="resume">
                <a href="https://drive.google.com/file/d/1dWFf5xSIO_awcSmFrF2sg02cm_m7-fmW/view?usp=sharing" target="_blank" rel="noreferrer">
                    <IoDownloadOutline size="2.5em"/>
                </a>
            </div>
        </div>
    </div>


    <div className="section-container" id="contact">
        <div className="section-title">let's chat 📝</div>
        <div className="section-text">
            <p>i'm always on the lookout for a new book recommendation, an underground indie band, or just to bounce around some ideas! if you have a professional opportunity i'd love to get connected!</p>
            <br></br>
            <div className="orange-highlight">
                i've recently tried three.js & it has been immensely fun! i'm exploring the development of modern visualization in the digital age
            </div>
            <br></br><br></br>
            <Buttons/>
            <br></br><br></br>
        </div>
    </div>


    <div className="play-container" id="play">
        <br></br><br></br>
        <div className="play-game"></div>
        <div className="play-text">3d objects i made to practise texture & lighting</div>
    </div>

</div>  );
}
export default About;