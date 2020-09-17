import React, { useState } from 'react';
import './css/Todo.css';
import { Button, FormControl, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Modal, TextField } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import db from '../config/firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(5, 5, 5, 2)
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
}));

function Todo(props) {
    const { todo } = props;
    const classes = useStyles();
    const handleDelete = () => {
        db.collection('todos').doc(todo.id).delete();
    }

    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(todo.todo);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleUpdate = (e) => {
        setUpdate(e.target.value);
    }

    const updateTodo = () => {
        db.collection('todos').doc(todo.id).set({
            todo: update
        }, { merge: true })
        setOpen(false);
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <FormControl className={classes.root}>
                        <TextField type="text" value={update} onChange={handleUpdate} id="outlined-basic" label="Outlined" variant="outlined" />
                    </FormControl>
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>
            < List >
                <ListItemAvatar className="todo__list">
                    <ListItem>
                        <ArrowRightAltIcon />
                        <ListItemText className="todo__text" primary={todo.todo} secondary="Dummy Deadline ⏰" />
                    </ListItem>
                    <Button >
                        <EditIcon onClick={handleOpen} />
                    </Button>
                    <Button >
                        <DeleteIcon onClick={handleDelete} />
                    </Button>
                </ListItemAvatar>
            </List >
        </>
    )
}

export default Todo;
