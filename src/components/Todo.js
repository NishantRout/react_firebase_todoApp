import React from 'react';
import './css/Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Todo(props) {
    const { todo } = props;
    return (
        < List >
            <ListItemAvatar className="todo__list">
                <ListItem>
                    <ArrowRightAltIcon />
                    <ListItemText className="todo__text" primary={todo} secondary="Dummy Deadline ⏰" />
                </ListItem>
            </ListItemAvatar>

        </List >
    )
}

export default Todo;
