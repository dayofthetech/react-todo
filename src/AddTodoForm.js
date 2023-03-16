import React, {useRef} from 'react'

export default function AddTodoForm( {onAddTodo}) {

  //One solution is to call the useRef react hook
  const todoNameRef = useRef()

  function handleAddTodo(e) {

    const todoTitle = todoNameRef.current.value

    e.preventDefault();

    console.log(todoTitle)
    onAddTodo(todoTitle)
  }

  return (
    <div>
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title </label>
            <input id='todoTitle' type='text' name='title' ref={todoNameRef}/>
            <button>Add </button>
        </form>
    </div>
  )
}
