import React, { useState } from 'react';
import { StateProps } from '../App';

interface IProps {
	todo: StateProps
	changeStatus: (id: number) => void
	deleteTodo: (id: number) => void
	showEditInput: (id: number) => void
	changeContent: (id: number, content: string) => void
}
const TodoItem = ({ todo, changeStatus, deleteTodo, showEditInput, changeContent }: IProps) => {
	const [text, setText] = useState(todo.content)
	const changeHandler = () => {
		changeStatus(todo.id)
	}

	const deleteTodoHandler = () => {
    deleteTodo(todo.id)
	}

	const showEditHandler = () => {
		showEditInput(todo.id)
	}

	const changeTextHandler = (e: React.ChangeEvent) => {
		setText((e.target as HTMLInputElement).value)
	}

	const cancelAndSaveHandler = (e: React.KeyboardEvent) => {
		if(e.key === 'Escape') {
			showEditInput(todo.id)
		}
		if(e.key === 'Enter' && text) {
			changeContent(todo.id, text)
		}
	}

  return (
    <li className={`${todo.isCompleted ? 'completed' : ''} ${todo.editing ? 'editing' : ''}`}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					checked={todo.isCompleted}
					onChange={changeHandler}
				/>
				<label onDoubleClick={showEditHandler}>{todo.content}</label>
				<button className="destroy" onClick={deleteTodoHandler}></button>
			</div>
			<input
			  className="edit"
			  value={text}
			  onChange={changeTextHandler}
			  onKeyDown={cancelAndSaveHandler}
			/>
		</li>
  )
}

export default TodoItem;