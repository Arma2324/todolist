import React from 'react';

class NewTodo extends React.Component {
  render() {
    return (
      <div className="container">
        <input className="new-todo" placeholder="What needs to be done?" autoFocus />
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all"></label>
      </div>
    )
  }
}

export default NewTodo;