import React, {useState, useEffect} from 'react';
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm';


function App() {

  const [todoList, setTodoList] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  //async function
  const fetchData = async() => {
    const options = {
      method:'GET',
      headers:{
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    }
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}\
`
    try{
      const response = await fetch(
        url, options
      )
      //console.log(response)
      if(!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      //data variable that awaits a parsed version
      const data = await response.json();
     //console.log(data)

      //variable that accepts the results of mapping
      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
        }
        return newTodo
      })
      //console.log(todos)
      setTodoList(todos)
      setIsLoading(false)
    } catch(error) {
      console.log(error.message)
    }
  }

  const postTodo = async(todo) => {
    try {
      const airtableData = {
        fields: {
          title: todo,
        },
      };
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}\
`,        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
            body: JSON.stringify(airtableData)
            }
      );
      if(!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();
      return dataResponse;
    } catch(error) {
      console.log(error.message);
      return null;
    }
  };

  //useEffect with asycn
  useEffect(() => {
    fetchData()
  })

  useEffect(() => {
    postTodo()
  })

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
