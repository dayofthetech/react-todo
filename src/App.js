import React, {useState} from 'react';
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';

function usePersistentState () {
  const [todoList, setTodoList] = React.useState(() => {
    const savedTodoList = localStorage.getItem("savedTodoList");
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList];
}

function App() {

  const [todoList, setTodoList] = usePersistentState();

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
    <p> {}</p>
    <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  )
}

export default App;
