import React from 'react'
import TodoListItem from './TodoListItem';


export default function TodoList({ todoList, onRemoveTodo} ) {
  return (
    <div>
        <ul>
          {todoList.map(todo =>
            <TodoListItem todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo}/>
          )}
        </ul>
    </div>
  )
}
