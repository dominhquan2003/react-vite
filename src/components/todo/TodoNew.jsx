import {useState} from 'react';
const ToDoNew = (props) => {
      const{addNewTodo} = props;
      addNewTodo("Do Minh Quan");
      // useState Hook (getter/setter) 
      // const valueInput = ""
      const [valueInput, setValueInput] = useState("initial value");

      const handleClick = () => {
            console.log(">>> Check value input",valueInput);
      }
      const handleOnChange= (name) => {
            setValueInput(name);
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
                  <div>
                        my text input  = : {valueInput}
                  </div>
            </div>
      )
}
export default ToDoNew