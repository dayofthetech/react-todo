import React, {useState} from 'react';
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';


function App() {

  const [todoList, setTodoList] = React.useState([]);


  React.useEffect(() => {
    localStorage.getItem("savedTodoList", todoList)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList])



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
