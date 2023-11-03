import React from "react";
import '../styles/response.css'

export default function Response(props) {
    return (
        <>
            <div className={`${props.cl ? 'success' : 'failed'}`}>
                <h2>{props.msg}</h2>
            </div>
        </>
    );
}
