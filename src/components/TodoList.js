import React from 'react'
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';


export default function TodoList({ todoList, onRemoveTodo, category} ) {

  return (
    <div>
        <ul>
          {todoList.map(todo =>
            <TodoListItem
            todo={todo}
            key={todo.id}
            onRemoveTodo={onRemoveTodo}
            category={category}
            />
          )}
        </ul>
    </div>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
}
