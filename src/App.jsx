import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import TodoImg from './components/todo/TodoImg'

const App = () => {
  const todoObject = {
    title: "Learn React",
    description: "Study the basics of React and build a simple project",
    completed: false
  }
  const name = "Do Minh Quan" ;
  const age = 20; 
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData  
        title={todoObject}
        name={name}
        age={age}
      />
      <TodoImg />
    </div>
  )
}

export default App
