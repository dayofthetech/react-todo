import React from 'react'
import TodoListItem from './TodoListItem';

const myList = [
    {title: "Complete assignment",
    objectID: 1,
    },
    {title: "Pospone assignment",
    objectID: 2,
    },
    {title: "Assignment finished",
    objectID: 3,
    },
  ];

export default function TodoList() {
  return (
    <div>
        <ul>
          {myList.map( todo => {
           return <TodoListItem key={todo.objectID} todo={todo.title}/>
          }
          )}
        </ul>
    </div>
  )
}
