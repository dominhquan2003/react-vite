const ToDoData = (props) => {
      //props is an object that contains all the properties passed to the component
      console.log(props);
      const{name,title,age} = props;
      return (
            <div className='todo-data'>
                  <div>{name} {age}</div>
                  <div>Learning React {title.name} </div>
                  <span>{title.description}</span>
                  <div>MERN STACK</div>
            </div>
      )
}
export default ToDoData