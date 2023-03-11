import React from "react";
import "../styles/toolbar.css";

function Toolbar({ filters, selected, onSelectFilter }) {
    const handleClick = (event) => {
        onSelectFilter(event.target.innerHTML);
        event.target.
    };

    return (
      <div className="container">
        <ul className="filters">
            {filters.map((element, index) => {
                return (
                    <li className="filters__item" key={index}>
                        <button 
                            className={selected === element ? "active" : "button"}
                            onClick={handleClick}>
                                {element}
                        </button>
                    </li>);
            })}
        </ul>
      </div>
    );
  }
  
  export default Toolbar;