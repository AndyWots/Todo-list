
import {useState} from 'react';
import ToDoForm from './components/UI/ToDoForm';
import ToDo from './components/ToDo';
import React from 'react';
import './App.css';

function App(props) {

  const [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
      if(userInput) {
        const newItem = {
          id: Math.random().toString(36).substring(2, 9),
          task: userInput,
          complete: false
        }
        setTodos([...todos, newItem])
      }
    }

    const removeTask = (id) => {
      setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
      setTodos([
        ...todos.map((todo) => 
          todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
        )
      ])
    }

  return (
    <div>
      <header className='header'>
        <h1 >
          My To Do List : {todos.length} quastions
        </h1>
      </header>
      <ToDoForm onAddTask={addTask}/>
      {todos.map((todo) => {
        return (
          <ToDo
            key = {todo.id}
            todo = {todo}
            onHandleToggle = {handleToggle}
            onRemoveTask = {removeTask}
           />
        )
      })}
    </div>
  );
}

export default App;
