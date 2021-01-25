import React from 'react';
import {FaLinkedinIn, FaGithub, FaPinterest} from 'react-icons/fa';
import "../styles/Buttons.css";

function Buttons() {
    return(
    <div className="icon">
        <a href="https://www.linkedin.com/in/clarajchu/" target="_blank" rel="noreferrer">
            <FaLinkedinIn size="3em"/>
        </a>
        <a href="https://github.com/armydillo0/take0/tree/main/IdeaProjects/experiment1" target="_blank" rel="noreferrer">
            <FaGithub size="3em"/>
        </a>
        <a href="https://www.pinterest.ca/clarajchu" target="_blank" rel="noreferrer">
            <FaPinterest size="3em"/>
        </a>
    </div>
    );
}

export default Buttons;