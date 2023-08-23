import React from "react"

function Form(props){
    return(
        <form>
            <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
                Tâches à faire
            </label>
            </h2>
            <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            />
            <button type="submit" className="btn btn__primary btn__lg">
            Ajouter
            </button>
        </form>
    );
}
export default Form;