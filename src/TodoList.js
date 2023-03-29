import React from 'react'
import TodoListItem from './TodoListItem';


export default function TodoList({ todoList} ) {
  return (
    <div>
        <ul>
          {todoList.map(todo =>
            <TodoListItem todo={todo} key={todo.id} />
          )}
        </ul>
    </div>
  )
}
