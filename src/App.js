import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Airtable from 'airtable';


const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).
  base(process.env.REACT_APP_AIRTABLE_BASE_ID);

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect for airtable only
  //  this one display the items into the app
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

        //This saves locally
        localStorage.setItem("savedTodoList", JSON.stringify(newTodoList));
      });
  }, [todoList]);


  //second useEffect
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [todoList, isLoading])


  function addTodo(newTodo) {
    base('Default').create([{
      fields:
         newTodo
    }], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
        console.log(record.get('title'));
      });
    });
  }

  function removeTodo(id) {
    base('Default').destroy([id], function(err, deletedRecords) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Deleted', deletedRecords.length, 'records');
      const newTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(newTodoList);
    });
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