const ToDoNew = (props) => {
      const{addNewTodo} = props;
      addNewTodo("Do Minh Quan");
      const handleClick = () => {
            alert("Click me");
      }
      const handleOnChange= (name) => {
            console.log(">>> Handle on change",name);
            
      }
      return (
            <div className='todo-new'>
                  <input type="text" 
                        onChange={(e) => handleOnChange(e.target.value)}
                  />
                  <button 
                        style={{cursor :"pointer"}} 
                        onClick={handleClick}
                  >Add</button>
            </div>
      )
}
export default ToDoNew