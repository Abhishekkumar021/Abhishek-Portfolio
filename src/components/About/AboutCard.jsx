import React from "react";
// import Card from "react-bootstrap/Card";
import rightHand from '../../assets/hand-right-96.png'

export default function AboutCard() {
    return (
        <div className="quote-card-view">
            <div>
                <blockquote className="blockquote mb-0">
                    <p className="intro-part">
                        Hi Everyone, I am <span className="purple">Abhishek Kumar </span>
                        from <span className="purple"> Uttar Pradesh, India.</span>
                        <br /> I am a final year student pursuing My B.Tech Degree in Computer Science & Engineering.
                        <br />
                        I am Full Stack, MERN Stack, Blockchain, Python Developer
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <div className="activity">
                        <div className="about-activity">
                            <img src={rightHand} alt="right-point" /> Playing Games
                        </div>
                        <div className="about-activity">
                            <img src={rightHand} alt="right-point" /> Watching Tech Shows
                        </div>
                        <div className="about-activity">
                            <img src={rightHand} alt="right-point" /> Travelling
                        </div>
                    </div>

                    <p className="quotes">
                        " We can't predict the future, but we can shape it. "{" "}
                    </p>
                    <footer className="blockquote-footer">Abhishek...</footer>
                </blockquote>
            </div>
        </div >
    );
}