import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particles";
import mscc from "../../Assets/MSCC-1.png";
import trustQR from "../../Assets/Trust-QR-1.png";
import valueHunt from "../../Assets/ValueHunt-1.png";
import '../../styles/project.css'


export default function Projects() {
    return (
        <div className="project-section">
            {/* <Particle /> */}
            <div className="cnt">
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p >
                    Here are a few projects I've worked on recently.
                </p>
                <div className="main-cnt">
                    <span className="project-card">

                        <ProjectCard
                            imgPath={mscc}
                            title='MSCC'
                            description='MS Coaching Center is an innovative web platform dedicated to delivering high-quality education and comprehensive exam preparation. 
                            The platform features a dynamic frontend built with Next.js, delivering a flawless user experience. The backend, powered by Express.js and MongoDB, ensures optimal performance and robust data management.'
                            ghLink='https://github.com/Abhishekkumar021/TrustQR-Frontend'
                            demoLink='https://mscc.vercel.app'
                        />
                    </span>
                    <span className="project-card">

                        <ProjectCard
                            imgPath={trustQR}
                            title='Trust-QR'
                            description="Trust QR is an innovative platform leveraging Blockchain technology and QR codes to battle counterfeiting. Companies can securely register their products, each receiving a unique QR code. Consumers can effortlessly scan a product's QR code to confirm its authenticity, validating the brand, and accessing manufacturing and expiry date information. This initiative bolsters product trust and transparency. Technologies in play include Next.js for the frontend, FastApi for the backend, and Blockchain technologies such as Solidity and Python, along with the Brownie framework."
                            ghLink='https://github.com/Abhishekkumar021/TrustQR-Frontend'
                        />
                    </span>
                    <span className="project-card">
                        <ProjectCard
                            imgPath={valueHunt}
                            title='ValueHunt'
                            description='
                            ValueHunt is reshaping the online clothing shopping experience
                             through cutting-edge Artificial Intelligence. With just a photo, our AI 
                             extracts color, category, and style details and scours major e-commerce 
                             platforms like Amazon, Flipkart, Ajio, and Myntra to uncover the best 
                             prices. Key technologies involved include Next.js for the frontend, 
                             Flask for the backend, Selenium and Beautiful Soup for web scraping, 
                             and machine learning using Transfer Learning and Convolutional Neural 
                             Networks (CNN) trained with VGG.'
                            ghLink='https://github.com/Abhishekkumar021/valueHunt-Frontend'
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}