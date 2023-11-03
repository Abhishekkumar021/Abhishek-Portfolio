import React from "react";
import Particle from "../Particles";
import SecondPage from "./SecondHomePage";
import homeLogo from '../../Assets/home-main.svg'
import '../../styles/home.css'
import Type from "./Type";

export default function Home() {
    return (
        <section>
            <div className="home-section" id="home">
                <Particle />
                <div className="home-content">
                    <div className="home-header">
                        <h1 className="heading">
                            Hi There !{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>

                        <h1 className="heading-name">
                            I'M
                            <strong className="main-name"> Abhishek Kumar</strong>
                        </h1>

                        <div >
                            <Type />
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={homeLogo} alt="home pic" className="img" />
                    </div>
                </div>

            </div>
            <SecondPage />
        </section>
    );
}
