import React from "react";
import './Main.css'
import About from "../About/About";
import Gallery from "../Gallery/Gallery";

function Main() {
    return (
        <main className='main'>
            <About/>
            <Gallery/>
        </main>)
}

export default Main