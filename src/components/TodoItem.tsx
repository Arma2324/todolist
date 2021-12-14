import React from 'react';
import { StateProps } from '../App';

interface IProps {
	todo: StateProps
	changeTodo: (id: number) => void
}
const TodoItem = ({ todo, changeTodo }: IProps) => {
	const changeHandler = () => {
		changeTodo(todo.id)
	}

  return (
    <li className={todo.isCompleted ? 'completed' : ''}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					checked={todo.isCompleted}
					onChange={changeHandler}
				/>
				<label>{todo.content}</label>
				<button className="destroy"></button>
			</div>
			{/* <input className="edit" value="Rule the web" /> */}
		</li>
  )
}

export default TodoItem;