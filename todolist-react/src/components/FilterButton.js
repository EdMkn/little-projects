import React from "react"

function FilterButton(props){
    return(
        <button 
          type="button" 
          className="btn toggle-btn" 
          aria-pressed="true"
          onClick={()=>props.setFilter(props.name)}>
          <span className="visually-hidden">Afficher </span>
          <span className="visually-hidden">les tâches</span>
          <span>{props.name}</span>
        </button>
    );
}
export default FilterButton;