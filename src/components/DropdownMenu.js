import React from 'react'
import Select from 'react-select'
import DropdownMenuItem from './DropdownMenuItem'
import { StyleDropdownMenu } from './styles/DrowdownMenu.styled'



export default function DropdownMenu( {options} ) {
    // console.log(todo.category)
  return (
    // Here is where I need to dropdown code
    //  So either DropdownMenu.styled.js or leave as <ul>
    //  this button needs to onClick logic
    <StyleDropdownMenu>
        <Select  />
    </StyleDropdownMenu>

  )

}
