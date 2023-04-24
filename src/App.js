import React, {useState, useEffect} from 'react';
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';


function App() {

  const [todoList, setTodoList] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  //first useEffect
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data : {todoList : JSON.parse(localStorage.getItem("savedTodoList"))}})
      },2000)
    }).then((result) => {
      setTodoList([...result.data.todoList])
      setIsLoading(false)
    })
  }, [] )

  //second useEffect
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [todoList, isLoading])

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }

  function removeTodo(id){
    const updatedTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(updatedTodoList)
  }

  return (
    <>
    <div>
      <h1>Todo List</h1>
    </div>
    <hr />
    <AddTodoForm onAddTodo={addTodo} />
    {isLoading ? (
          <p> Loading ... </p>
          ) : (
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
          )}
    </>
  )
}

export default App;
