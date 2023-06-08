import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Airtable from 'airtable';
import DropdownMenu from './DropdownMenu';

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

export default function TodoContainer() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const newTodoList = [];

    base("Default").select({ view: "Grid view" }).eachPage(
      (records, fetchNextPage) => {
        records.forEach((record) => {
          newTodoList.push({
            id: record.id,
            title: record.get("title"),
            category: record.get("category")});
        });
        fetchNextPage();
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        setTodoList(newTodoList);
        setIsLoading(false);
        localStorage.setItem("savedTodoList", JSON.stringify(newTodoList));

        //value and label undefined
        //   console.log(fetchedCategories);

        // console.log(categories);

        //   it logs well, but categpry still undefined
        //   console.log(newTodoList);

        //  Not defined
        //  console.log(category);
      }
    );
  }, []);

  function addTodo(newTodo) {
    base('Default').create(
      [{ fields: newTodo }],
      (err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach((record) => {
          const createdTodo = { id: record.id, title: record.get('title') };
          setTodoList((prevTodoList) => [...prevTodoList, createdTodo]);
          console.log(record.getId());
          console.log(record.get('title'));
        });
      }
    );
  }

  function removeTodo(id) {
    base('Default').destroy([id], (err, deletedRecords) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Deleted', deletedRecords.length, 'records');
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);
    });
  }

  return (
    <>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      )}
    </>
  );
}
