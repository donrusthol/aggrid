import React, { useState } from "react";
import './App.css';
import TodoTable from "./TodoTable";

function TodoList(props) {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [pri, setPri]   = useState('');

  const inputChanged = (e) => {
    if (e.target.name === 'description') {
      setDesc(e.target.value);
    } else if (e.target.name === 'date') {
      setDate(e.target.value);
    } else if (e.target.name === 'priority') {
      setPri(e.target.value);
    }
  }

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      description: desc, 
      date: date, 
      priority: pri
    };
    
    props.setTodos([...props.todos, newTodo]);
    setDesc('');
    setDate('');
    setPri('');
  }

  const deleteTodo = (index) => {
    props.setTodos(props.todos.filter((todo, i) => i !== index));
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label> Description: </label>
        <input type = "text" name="description" value={desc} onChange={inputChanged} />
        <label> Date: </label>
        <input type="date" name="date" value={date} onChange={inputChanged} />
        <label> Priority: </label>
        <input type="text" name="priority" value={pri} onChange={inputChanged} />
        <input type = "submit" value="Add" />
      </form>
      <TodoTable todos={props.todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoList;
