import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList'
import Bottom from './components/Bottom'

export interface StateProps {
  id: number;
  content: string;
  isCompleted: boolean;
}

const App = () => {
  const [ todolist, setTodolist ] = useState<StateProps[]>([])

  const changeTodo = (id: number) => {
    const newTodolist = todolist.map(item => {
      if (id === item.id) {
        return Object.assign({}, item, {
          isCompleted: !item.isCompleted
        })
      }
      
      return item
    })

    setTodolist(newTodolist)
  }
  
  const addTodo = (todo: StateProps) => {
    setTodolist([...todolist, todo])
  }

  return (
    <div className="todoapp">
      <header className="header">
				<h1>todos</h1>
			</header>
      <NewTodo addTodo={addTodo} />
      <TodoList todolist={todolist} changeTodo={changeTodo} />
			<Bottom />
    </div>
  );
}

export default App;
