import React from 'react';

interface IProps {
	count: number
	clearCompleted: () => void
}
const Bottom = ({ count, clearCompleted }: IProps) => {
	const clearCompletedHandler = () => {
    clearCompleted()
	}

  return (
    <footer className="footer">
			<span className="todo-count"><strong>{count}</strong> item left</span>
			{/* <ul className="filters">
				<li>
					<a className="selected" href="#/">All</a>
				</li>
				<li>
					<a href="#/active">Active</a>
				</li>
				<li>
					<a href="#/completed">Completed</a>
				</li>
			</ul> */}
			<button className="clear-completed" onClick={clearCompletedHandler}>Clear completed</button>
		</footer>
  )
}

export default Bottom;