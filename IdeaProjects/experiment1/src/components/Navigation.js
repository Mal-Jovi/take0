import React from 'react';
import '../styles/Navigation.css';
import {GiAbstract082} from 'react-icons/gi';
import { HashLink as Link } from 'react-router-hash-link';

function Navigation() {
  return (
    <div className="navbar">
        <Link to="/#about" smooth={true} duration={3500}>about</Link>
        <Link to="/#vision" smooth={true} duration={3500}>vision</Link>
        <li><GiAbstract082 size="1.75em"/></li>
        <Link to="/#contact" smooth={true} duration={3500}>contact</Link>
        <Link to="/#play" smooth={true} duration={3500}>play</Link>
    </div>
  );
}
export default Navigation;