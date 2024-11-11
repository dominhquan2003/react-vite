import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import TodoImg from './components/todo/TodoImg'

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData />
      <TodoImg />
    </div>
  )
}

export default App
