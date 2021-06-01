import React from "react";
import './About.css'
import avatar from '../../images/a0FHwOXmpoM.jpg'
import VisibilitySensor from 'react-visibility-sensor';
import { gsap } from "gsap";

function About() {
    const [viewPortEntered, setViewPortEntered] = React.useState(false);


   function animation () {
       gsap.timeline({
           duration: 2,
       }).to('.about__text',{
           duration: 2,
           opacity: 1,
           scale: 1,
       }).to('.about__img', {
           duration: 2,
           y: -20,
           x: -50,
           opacity: 1,
           scale: 1,
       })
   }

    return (
        <VisibilitySensor active={!viewPortEntered} onChange={isVisible => {
            if (isVisible) {
                setViewPortEntered(true);
                animation()
            }
        }}>
        <div id='about' className="about">
            <div className="about__text">
            <h2 className="about__title">About me</h2>
            <p className="about__subtitle">Hi, my name Maxim, it's hard for me to tell something about myself,
                let my photos tell you more than words</p>
            </div>
            <img id='maxim' className="about__img" src={avatar} alt="Maxim"/>
        </div>
        </VisibilitySensor>
        )
}

export default About