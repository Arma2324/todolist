import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>Buy a unicorn</label>
					<button className="destroy"></button>
				</div>
				<input className="edit" value="Rule the web" />
			</li>
    )
  }
}

export default TodoItem;