import React, {useState} from 'react'
import Select from 'react-select'
import DropdownMenuItem from './DropdownMenuItem'
import { StyleDropdownMenu } from './styles/DrowdownMenu.styled'

//options has to be on this format to enter in the options field
const options = [
    {value: "urgent",  label: "urgent"},
    {value: "important",  label: "important"},
    {value: "temporary",  label: "temporary"},
];

export default function DropdownMenu() {
  return (
    // Here is where I need to dropdown code
    //  So either DropdownMenu.styled.js or leave as <ul>
    //  this button needs to onClick logic
    <StyleDropdownMenu>
        <Select  options={options}/>
    </StyleDropdownMenu>

  )
}
