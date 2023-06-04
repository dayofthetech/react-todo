import React from 'react';
import { StyleTodoListItem } from './components/styles/TodoListItem.styled';
import ThemedButton from './components/styles/Button.styled';

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
