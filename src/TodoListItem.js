import React from 'react'

export default function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li>
        <span>
            {todo.title}
            <button type='button' onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </span>
    </li>
  )
}
