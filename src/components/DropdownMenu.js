import React, {useState} from 'react'
import Select from 'react-select'
import DropdownMenuItem from './DropdownMenuItem'
import { StyleDropdownMenu } from './styles/DrowdownMenu.styled'

//The category has t be on this format to enter in the options field
const options = [
    {value: "hello",  label: "hello"},
    {value: "world",  label: "world"},
    {value: "dayof",  label: "dayof"},
];

export default function DropdownMenu( {category} ) {

    //Display the current cat in aritable - if empty in airtable then error
    // const options = category.map((categoryItem) => ({
    //     value: categoryItem,
    //     label: categoryItem,
    //   }));

    //At this point I get the cat - if there is one in airtable, otherwise
    //undefined
    // console.log(category);
  return (
    // Here is where I need to dropdown code
    //  So either DropdownMenu.styled.js or leave as <ul>
    //  this button needs to onClick logic
    <StyleDropdownMenu>
        <Select  options={options}/>
    </StyleDropdownMenu>

  )

}
