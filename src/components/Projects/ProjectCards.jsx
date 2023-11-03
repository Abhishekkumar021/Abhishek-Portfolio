import '../../styles/project.css'
import React from 'react';


function ProjectCards(props) {
    return (
        <div className="project-card-view">
            <img src={props.imgPath} alt="card-img" />
            <div className='text-cnt'>
                <h2>{props.title}</h2>
                <p >
                    {props.description}
                </p>
                <div className="bttn">
                    <a href={props.ghLink} target="_blank" className='github'>
                        GitHub
                    </a>

                    {props.demoLink && (
                        <a href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }} className='demo'>
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;
