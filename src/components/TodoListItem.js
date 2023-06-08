import React, {useState} from 'react';
import { StyleTodoListItem } from './styles/TodoListItem.styled';
import ThemedButton from './styles/Button.styled';
import PropTypes from 'prop-types';
import DropdownMenu from './DropdownMenu';

export default function TodoListItem({ todo, onRemoveTodo, category}) {

  // This gets me the category in the array
  // console.log(todo.category);

  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <StyleTodoListItem>
      {todo.title}
        <ThemedButton theme="removeTheme" onClick={handleRemoveClick}>
          Remove
        </ThemedButton>
        {/* I can add dropwon here but is taking styling from
        StyleTodoListItem */}
        <DropdownMenu category={todo.category}>

        </DropdownMenu>
    </StyleTodoListItem>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
}
