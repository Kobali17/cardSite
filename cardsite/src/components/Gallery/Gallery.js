import React from "react";
import './Gallery.css'
import {gsap} from "gsap";
import VisibilitySensor from "react-visibility-sensor";
import a from "../../images/IMG_8403 (1).jpg";
import b from "../../images/IMG_1384.jpg";
import c from "../../images/IMG_3784.jpg";
import d from "../../images/IMG_7821.jpg";
import e from "../../images/IMG_8759.jpg";


function Gallery() {
    const [viewEntered, setViewEntered] = React.useState(false);

    function photoVisibility () {
        gsap.timeline( {
            duration: 2,
        }).to('#first',{
            y: -50,
            opacity: 1,
            scale: 1.1,
            duration: 1.5,
            boxShadow: '-10px 5px 5px rgba(0, 0, 0, 0.4)',

        }).to('#second',{
            y: 50,
            opacity: 1,
            scale: 1.1,
            duration: 1.5,
            boxShadow: '-10px 5px 5px rgba(0, 0, 0, 0.4)',
        })
    }
    return (
        <VisibilitySensor active={!viewEntered} onChange={isVisible => {
            if (isVisible) {
                setViewEntered(true);
                photoVisibility()
            }
        }}>
      <div className='gallery' id='gallery'>
          <img id='first' className="gallery__img-first" src={a} alt="Maxim"/>
          <img id='second' className="gallery__img-second" src={b} alt="Maxim"/>
          <img id='first' className="gallery__img-first" src={c} alt="Maxim"/>
          <img id='second' className="gallery__img-second" src={d} alt="Maxim"/>
          <img id='first' className="gallery__img-first" src={e} alt="Maxim"/>
      </div>
        </VisibilitySensor>
    )
}

export default Gallery