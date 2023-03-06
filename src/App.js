import React from 'react';


const myList = [
  {title: "Complete assignment",
  objectID: 1,
  },
  {title: "Pospone assignment",
  objectID: 2,
  },
  {title: "Assignment finished",
  objectID: 3,
  },
];


function App() {
  return (
    <>
    <div>
      <h1>Todo List</h1>
    </div><ul>
        {myList.map(function (item) {
          return <li key={item.objectID}>
            <span>
              {item.title}
            </span>
          </li>;
        })}
      </ul>
      </>
  )
}

export default App;
