import React from "react";
import "../styles/projectlist.css"

function ProjectList({ projects }) {
    return (
        <div className="container">
            <ul className="list">
                {projects.map((element, index) => {
                    return (
                    <li className="list__item" key={index}>
                        <img src={element.img}></img>
                    </li>);
                })}
            </ul>
        </div>
    );
  }
  
  export default ProjectList;
  