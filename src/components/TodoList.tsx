import React from 'react';
import { StateProps } from '../App';
import TodoItem from './TodoItem';

interface IProps {
	todolist: StateProps[]
	changeTodo: (id: number) => void
	deleteTodo: (id: number) => void
}

const TodoList = ({ todolist, changeTodo, deleteTodo }: IProps) => {
	const todolistDom = todolist.map(item => <TodoItem key={item.id} todo={item} changeTodo={changeTodo} deleteTodo={deleteTodo} />)
  return (
    <ul className="todo-list">
			{ todolistDom }
		</ul>
  )
}

export default TodoList;