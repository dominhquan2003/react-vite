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
      const newToDo = {
        id: todoList.length + 1,
        title: name,
        description: "Study the basics of React and build a simple project",
        completed: "false"
      }
      setTodoList([...todoList, newToDo]);
      // todoList.push(newToDo);  This is wrong with a big application
      // setTodoList(todoList);  This is wrong
  };

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
