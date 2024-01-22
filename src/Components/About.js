import React from "react";
import profile from "../Images/img1.jpg"

const About = ()=>{
    return(
        <div className="about">
            <h1>About Me</h1>
            <img src={profile} alt="profile"/>
            <p>Hello everyone</p>
        </div>
    )
}

export default About;
