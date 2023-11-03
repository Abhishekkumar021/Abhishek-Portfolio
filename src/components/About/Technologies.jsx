import React from "react";
import CPlusPlus from "../../assets/c++250.png"
import Python from "../../assets/python-500.png"
import Javascript from "../../assets/javascript-78.png"
import Nodejs from "../../assets/nodejs-512.png"
import React_icon from "../../assets/react-480.png"
import Solidity from "../../assets/solidity-500.png"
import Mongodb from "../../assets/mongodb-96.png"
import Nextjs from "../../assets/nextjs-480.png"
import Git from "../../assets/git-500.png"
import Mysql from "../../assets/mysql-96.png"
import Django from "../../assets/django-512.png"
import Flask from "../../assets/flask-500.png"
import Tensorflow from "../../assets/tensorflow-480.png"
import Selenium from "../../assets/selenium-500.png"
import GitHub from "../../assets/github-512.png"


import '../../styles/About.css'


export default function Techstack() {
    return (
        <div className="tech-container">
            <span className="tech-icons" title="C++">
                <img src={CPlusPlus} alt="C++" />
            </span>
            <span className="tech-icons" title="Python" >
                <img src={Python} alt="Python" />
            </span>
            <span className="tech-icons" title="JavaScript" >
                <img src={Javascript} alt="JavaScript" />
            </span>
            <span className="tech-icons" title="Solidity" >
                <img src={Solidity} alt="Solidity" />
            </span>
            <span className="tech-icons" title="NodeJs" >
                <img src={Nodejs} alt="NodeJs" />
            </span>
            <span className="tech-icons" title="ReactJs" >
                <img src={React_icon} alt="ReactJs" />
            </span>



            <span className="tech-icons" title="NextJs" >
                <img src={Nextjs} alt="NextJs" />
            </span>
            <span className="tech-icons" title="Git" >
                <img src={Git} alt="Git" />
            </span>
            <span className="tech-icons" title="GitHub" >
                <img src={GitHub} alt="GitHub" />
            </span>
            <span className="tech-icons" title="Mongodb" >
                <img src={Mongodb} alt="Mongodb" />
            </span>
            <span className="tech-icons" title="Mysql" >
                <img src={Mysql} alt="Mysql" />
            </span>

            <span className="tech-icons" title="Django" >
                <img src={Django} alt="Django" />
            </span>
            <span className="tech-icons" title="Flask" >
                <img src={Flask} alt="Flask" />
            </span>
            <span className="tech-icons" title="Tensorflow" >
                <img src={Tensorflow} alt="Tensorflow" />
            </span>
            <span className="tech-icons" title="Selenium" >
                <img src={Selenium} alt="Selenium" />
            </span>
        </div>
    );
}