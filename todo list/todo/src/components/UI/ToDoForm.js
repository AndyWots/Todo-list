import { useState } from "react";
import React from "react";
import styles from "./ToDoForm.module.css"

const ToDoForm = (props) => {

    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTask(userInput);
        setUserInput('')
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }

    }

    return (
        <form className={styles.form} onSubmit = {handleSubmit}>
            <input 
            value={userInput}
            type ="text"
            onChange={handleChange}
            onKeyDown = {handleKeyPress}
            placeholder = "Введите значение"
             />
                <button>
                    Add
                </button>
        </form>
    )
}

export default ToDoForm;