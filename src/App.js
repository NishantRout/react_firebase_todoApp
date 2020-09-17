import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

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
      <form>
        <FormControl>
          <InputLabel>Enter Todo</InputLabel>
          <Input type="text" value={input} onChange={handleInput} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary">
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <Todo todo={todo} />
          )
        })}
      </ul>
    </div>
  );
}

export default App;
