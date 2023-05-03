import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Airtable from 'airtable';


const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).
  base(process.env.REACT_APP_AIRTABLE_BASE_ID);

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ data : {todoList : JSON.parse(localStorage.getItem("savedTodoList"))}})
        },2000)
      }).then((result) => {
        const localItems = result.data.todoList
        setTodoList([...localItems])
        setIsLoading(false)
      })
    })

  // useEffect for airtable only
  useEffect(() => {
    const newTodoList = [];

    base("Default")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          newTodoList.push({ id: record.id, title: record.get("title") });
        });
        fetchNextPage();
      }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        setTodoList(newTodoList);
        setIsLoading(false);
        localStorage.setItem("savedTodoList", JSON.stringify(newTodoList));
      });
  }, []);


  useEffect(() => {
    // update localStorage when todoList changes
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  //second useEffect
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [todoList, isLoading])

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
    const updatedTodoList = [...todoList, newTodo];
    localStorage.setItem("savedTodoList", JSON.stringify(updatedTodoList));
  }


  function removeTodo(id) {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
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