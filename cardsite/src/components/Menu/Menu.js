import React from "react";
import './Menu.css'

function Menu() {
    return (
        <nav className='menu'>
            <a className="menu__link" href="#about">About</a>
            <a className="menu__link" href="#gallery">Gallery</a>
            <a className="menu__link" href="#contacts">Contacts</a>
        </nav>)
}

export default Menu