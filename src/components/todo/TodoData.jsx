const ToDoData = (props) => {
      //props is an object that contains all the properties passed to the component
      console.log(props);
      const { name, title, age, todoList } = props;
      return (
            <div className='todo-data'>
                  <div>{name} {age}</div>
                  <div>Learning React {title.name} </div>
                  <span>{title.description}</span>
                  <div>MERN STACK</div>
                  <div>
                        {todoList.map((todo, index) => {
                                    return (
                                          <ul key={todo.id}>
                                                <li >{todo.id}</li>
                                                <li>{todo.title}</li>
                                                <li>{todo.description}</li>
                                                <li>{todo.completed}</li>
                                          </ul>
                                    )
                        })}

                  </div>
            </div>
      )
}
export default ToDoData