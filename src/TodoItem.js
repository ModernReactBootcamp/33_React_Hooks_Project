import React from 'react';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';

export default function TodoItem({
  task,
  completed,
  removeTodo,
  id,
  toggleTodo,
  editTodo
}) {
  const [isEditing, toggle] = useToggleState();
  return (
    <ListItem style={{ height: '63px' }}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <CheckBox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
