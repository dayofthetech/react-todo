import React from 'react';
import { StyleTodoListItem } from './styles/TodoListItem.styled';
import ThemedButton from './styles/Button.styled';
import PropTypes from 'prop-types';

export default function TodoListItem({ todo, onRemoveTodo }) {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <StyleTodoListItem>
        {todo.title}
        <ThemedButton theme="removeTheme" onClick={handleRemoveClick}>
          Remove
        </ThemedButton>
    </StyleTodoListItem>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
}
