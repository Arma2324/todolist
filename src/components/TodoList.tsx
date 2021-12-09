import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
					<li className="completed">
						<div className="view">
							<input className="toggle" type="checkbox" defaultChecked />
							<label>Taste JavaScript</label>
							<button className="destroy"></button>
						</div>
						<input className="edit" value="Create a TodoMVC template" />
					</li>
					<TodoItem />
				</ul>
    )
  }
}

export default TodoList;