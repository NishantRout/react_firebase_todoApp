import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Complete NPTEL Assignment 1',
    'Computer Networks Project'
  ]);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      input
    ]
    );
    setInput('');
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => {
          return (
            <li>{todo}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
