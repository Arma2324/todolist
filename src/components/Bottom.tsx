import React from 'react';

interface IProps {
	count: number
}
const Bottom = ({ count }: IProps) => {
  return (
    <footer className="footer">
			<span className="todo-count"><strong>{count}</strong> item left</span>
			<ul className="filters">
				<li>
					<a className="selected" href="#/">All</a>
				</li>
				<li>
					<a href="#/active">Active</a>
				</li>
				<li>
					<a href="#/completed">Completed</a>
				</li>
			</ul>
			<button className="clear-completed">Clear completed</button>
		</footer>
  )
}

export default Bottom;