const ToDoNew = (props) => {
      const{addNewTodo} = props;
      addNewTodo("Do Minh Quan");
      return (
            <div className='todo-new'>
                  <input type="text" />
                  <button>Add</button>
            </div>
      )
}
export default ToDoNew