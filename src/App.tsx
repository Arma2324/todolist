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

  const deleteTodo = (id: number) => {
    const newTodolist = todolist.filter(item => item.id !== id)
    setTodolist(newTodolist)
  }
  
  const count = todolist.filter(item => item.isCompleted === false).length

  return (
    <div className="todoapp">
      <header className="header">
				<h1>todos</h1>
			</header>
      <NewTodo addTodo={addTodo} />
      <TodoList
        todolist={todolist}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
      />
			<Bottom count={count} />
    </div>
  );
}

export default App;
