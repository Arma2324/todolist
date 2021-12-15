import React from 'react';
import { StateProps } from '../App';
import TodoItem from './TodoItem';

interface IProps {
	todolist: StateProps[]
	changeStatus: (id: number) => void
	deleteTodo: (id: number) => void
	showEditInput: (id: number) => void
	changeContent: (id: number, content: string) => void
}

const TodoList = ({ todolist, changeStatus, deleteTodo, showEditInput, changeContent }: IProps) => {
	const todolistDom = todolist.map(item => {
		return (
			<TodoItem
			  key={item.id}
				todo={item}
				changeStatus={changeStatus}
				deleteTodo={deleteTodo}
				showEditInput={showEditInput}
				changeContent={changeContent}
				/>
		)
	})
  return (
    <ul className="todo-list">
			{ todolistDom }
		</ul>
  )
}

export default TodoList;