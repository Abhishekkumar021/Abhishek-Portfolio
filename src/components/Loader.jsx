import React from "react";
import "./Loader.css"

export default function Loader(props) {
    return (
        <div className={`${props.load ? "loader-container" : "preloader-none"}`} >
            <div className="loader"></div>
        </div>
    );
}
