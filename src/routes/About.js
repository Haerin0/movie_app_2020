import React from "react";
import './About.css';

function About(props) {
    console.log(props)
    return (
        <div className="about__container">
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </span>
            <span>- Lorem Ipsum</span>
        </div>
    );
}

export default About;