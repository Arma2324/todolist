import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList'
import Bottom from './components/Bottom'

export interface StateProps {
  id: number
  content: string
  isCompleted: boolean
  editing: boolean
}

const App = () => {
  const [ todolist, setTodolist ] = useState<StateProps[]>([])

  const changeStatus = (id: number) => {
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

  const showEditInput = (id: number) => {
    const newTodolist = todolist.map(item => {
      if (id === item.id) {
        return Object.assign({}, item, {
          editing: !item.editing
        })
      }
      
      return item
    })

    setTodolist(newTodolist)
  }
  
  const changeContent = (id: number, content: string) => {
    const newTodolist = todolist.map(item => {
      if(id === item.id) {
        return Object.assign({}, item, {
          content: content,
          editing: false
        })
      }

      return item
    })

    setTodolist(newTodolist)
  }
  
  const clearCompleted = () => {
    const newTodolist = todolist.filter(item => item.isCompleted === false)
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
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
        showEditInput={showEditInput}
        changeContent={changeContent}
      />
			<Bottom count={count} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
