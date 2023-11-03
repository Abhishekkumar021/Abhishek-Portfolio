import React from "react";
import Particle from "../Particles";
// import Github from "./GithubStatus";
import Techstack from "./Technologies";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Background images/about.png";
import Toolstack from "./Tools";

export default function About() {
    return (
        <div className="about-section">
            <Particle />
            <div className="card">
                <div className='aboutCard-section' >
                    <span className="heading1" >
                        <h1 >
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                        <Aboutcard />
                    </span>
                    <span className="about-img lap-img">
                        <img src={laptopImg} alt="about" className="img-fluid" />
                    </span>
                </div>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <Toolstack />
            </div>
        </div>
    );
}