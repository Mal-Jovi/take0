import React from 'react';
import './Navigation.css';
import {GiAbstract082} from 'react-icons/gi';

function Navigation() {
  return (
    <div className="navbar">
        <a href="/about">about</a>
        <a href="/">play</a>
        <li><GiAbstract082 size="1.5em"/></li>
        <a href="https://drive.google.com/file/d/1jrO52kN-ihz59b82jjJZuOkwe2MOU44b/view?usp=sharing" target="_blank">resume</a>
        <a href="/about">contact</a>
    </div>

  );
}
export default Navigation;