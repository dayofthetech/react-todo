import React, {useRef} from 'react'

export default function AddTodoForm( {onAddTodo} ) {

  function handleAddTodo(e) {

    e.preventDefault();

    const todoTitle = e.target.elements.title.value;

    console.log(todoTitle);

    onAddTodo(todoTitle);
    e.target.reset();
  }

  return (
    <div>
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title </label>
            <input id='todoTitle' type='text' name='title'/>
            <button>Add </button>
        </form>
    </div>
  )
}
