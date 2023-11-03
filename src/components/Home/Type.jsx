import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Python Developer",
                    "Blockchain Developer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

