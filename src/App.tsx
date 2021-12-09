import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList'
import Bottom from './components/Bottom'

function App() {
  return (
    <div className="todoapp">
      <header className="header">
				<h1>todos</h1>
			</header>
      <NewTodo />
      <TodoList />
			<Bottom />
    </div>
  );
}

export default App;
