import { Button, FormControl, makeStyles, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import db from './config/firebase';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const classes = useStyles();

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => {
        return ({
          id: doc.id,
          todo: doc.data().todo,
          timestamp: doc.data().timestamp.toDate()
        })
      }))
    })
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <FormControl className={classes.root}>
          <TextField type="text" value={input} onChange={handleInput} id="outlined-basic" label="Enter Todo" variant="outlined" />
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
