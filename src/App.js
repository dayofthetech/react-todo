import React, {useState} from 'react';
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';


function App() {

  const [todoList, setTodoList] = React.useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }

  return (
    <>
    <div>
      <h1>Todo List</h1>
    </div>
    <hr />
    <AddTodoForm onAddTodo={addTodo} />
    <p> {}</p>
    <TodoList todoList={todoList}/>

    </>
  )
}

export default App;
