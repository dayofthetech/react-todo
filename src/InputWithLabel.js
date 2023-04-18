import React, {useRef, useEffect} from 'react'

export default function InputWithLabel({id, value, onInputChange, children}) {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[onInputChange])

  return (
    <>
    <label htmlFor={id}> {children} </label>
    <input
        id={id}
        type='text'
        name='title'
        value={value}
        onChange={onInputChange}
        ref={inputRef}
    />
    </>
  )
}
