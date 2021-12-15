import React, { useState } from 'react';
import { StateProps } from '../App'

interface IProps {
  addTodo: (todo: StateProps) => void
}

const NewTodo = ({ addTodo }: IProps) => {
  const [text, setText] = useState('')

  const changeTextHandler = (e: React.ChangeEvent) => {
    setText((e.target as HTMLInputElement).value)
  }

  const addTodoHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && text !== '') {
      addTodo({
        id: new Date().getTime(),
        content: text,
        isCompleted: false,
        editing: false
      })

      setText('')
    }
      
  }

  return (
    <div className="container">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={addTodoHandler}
        onChange={changeTextHandler}
        value={text}
        autoFocus
      />
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all"></label>
    </div>
  )
}

export default NewTodo;