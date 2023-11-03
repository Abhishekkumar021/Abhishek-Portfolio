import React from "react";

import Postman from "../../Assets/postman-96.png"
import VsCode from "../../Assets/vs-code-480.png"
import VmWare from "../../Assets/vmware-500.png"
import Linux from "../../Assets/linux-100.png"
import Docker from "../../Assets/docker-144.png"




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