import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import TodoImg from './components/todo/TodoImg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    {id: 1, title: "Learn React", description: "Study the basics of React and build a simple project", completed: "false"},
    {id: 2, title: "Learn Angular", description: "Study the basics of React and build a simple project", completed: "false"},
    {id: 3, title: "Learn Vue JS", description: "Study the basics of React and build a simple project", completed: "false"},
  ]);
  const todoObject = {
    title: "Learn React",
    description: "Study the basics of React and build a simple project",
    completed: false
  }
  const name = "Do Minh Quan";
  const age = 20;
  const addNewTodo = (name) => {
    // alert(`Add new ${name} `);
  };
  // addNewTodo();
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        todoList={todoList}
        title={todoObject}
        name={name}
        age={age}

      />
      <TodoImg />
    </div>
  )
}

export default App
