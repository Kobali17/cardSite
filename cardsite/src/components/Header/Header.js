import React from "react";
import './Header.css'
import Menu from "../Menu/Menu";
import { gsap } from "gsap";

function Header() {
    React.useEffect(()=>{
        gsap.timeline({
            defaults: {
                duration: 1.5
            }
        })
            .to('.header__title', {
                opacity:1,
                scale: 1,
            })
            .to('.header__text', {
                opacity:1,
                y: 30,
                scale: 1,
            });
    })

    return (
        <header className="header">
            <Menu/>
            <h1 className="header__title" >Maksim Tinkov</h1>
            <p className="header__text"> Photographer </p>
        </header>
    )
}

export default Header