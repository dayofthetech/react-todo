import React, {useRef} from 'react'

export default function AddTodoForm( {onAddTodo} ) {

  const [todoTitle, setTodotitle] = React.useState("");

  function handleTitleChange(e) {
    const newTodoTitle = e.target.value;

    setTodotitle(newTodoTitle);
  }
  function handleAddTodo(e) {

    e.preventDefault();

    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodotitle("")
  }

  return (
    <div>
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title </label>
            <input
              id='todoTitle'
              type='text'
              name='title'
              value={todoTitle}
              onChange={handleTitleChange}
            />
            <button>Add </button>
        </form>
    </div>
  )
}
