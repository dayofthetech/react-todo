import React from 'react'

export default function AddTodoForm() {
  return (
    <div>
        <form>
            <label htmlFor='todoTitle'>Title </label>
            <input id='todoTitle' type='text' />
            <button>Add </button>
        </form>
    </div>
  )
}
