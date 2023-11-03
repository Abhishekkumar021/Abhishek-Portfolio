import React from "react";

import Postman from "../../assets/postman-96.png"
import VsCode from "../../assets/vs-code-480.png"
import VmWare from "../../assets/vmware-500.png"
import Linux from "../../assets/linux-100.png"
import Docker from "../../assets/docker-144.png"




export default function Toolstack() {
    return (
        <div className="tech-container">
            <span className="tech-icons" title="Linux" >
                <img src={Linux} alt="Linux" />
            </span>
            <span className="tech-icons" title="Docker" >
                <img src={Docker} alt="Docker" />
            </span>
            <span className="tech-icons" title="Postman">
                <img src={Postman} alt="Postman" />
            </span>
            <span className="tech-icons" title="VsCode" >
                <img src={VsCode} alt="VsCode" />
            </span>
            <span className="tech-icons" title="VmWare" >
                <img src={VmWare} alt="VmWare" />
            </span>

        </div>
    );
}