import React from 'react';
import './Navigation.css';
import {GiAbstract082} from 'react-icons/gi';

function Navigation() {
  return (
    <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/demo"><GiAbstract082 size="1em"/></a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
    </nav>
  );
}
export default Navigation;