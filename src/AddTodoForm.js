import React, {useRef} from 'react'
import InputWithLabel from './InputWithLabel';

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
      // id: Date.now(), <= ixs mention no need for Date.now
    });
    setTodotitle("")
  }

  return (
    <div>
        <form onSubmit={handleAddTodo}>
            <InputWithLabel id='todoTitle' value={todoTitle} onInputChange={handleTitleChange}>
            Title
            </InputWithLabel>
            <button>Add </button>
        </form>
    </div>
  )
}
