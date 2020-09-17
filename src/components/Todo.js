import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import './css/Todo.css';

function Todo(props) {
    const { todo } = props;
    return (
        < List >
            <ListItemAvatar>

            </ListItemAvatar>
            <ListItem>
                <ListItemText primary={todo} secondary="Dummy Deadline ⏰" />
            </ListItem>
        </List >
    )
}

export default Todo;
