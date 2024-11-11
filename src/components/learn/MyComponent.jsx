// Rule Component name must be in PascalCase, myComponent -> MyComponent
// Component = html + css + js
// jsx => chi tra ve 1 thang parent duy nhat
import './style.css';
const MyComponent = () => {
      const bin = " Do Minh Quan "; // string 
      const objectToSting = { name: "Do Minh Quan", age: 20 }; // object
      const nestedObject = {
            person1: { name: "Alice", age: 25 },
            person2: { name: "Bob", age: 30 },
            person3: { name: "Charlie", age: 35 }
      };
      return (
            <>
                  <div>  {JSON.stringify(objectToSting)} || {objectToSting.name} My Component </div>
                  {console.log(Object.keys(nestedObject))}
                  {/* use loop with nest object in jsx */}
                  <ul>
                        {Object.keys(nestedObject).map((person, index) => {
                              return (
                                   
                                    <li key={index}>
                                          <p>{nestedObject[person].name}</p>
                                          <p>{nestedObject[person].age}</p>
                                    </li>
                              );
                        })} 
                  </ul>
                  <div className="child"
                        style={{ borderRadius: "10px", borderColor: "red" }}>
                        child  {bin}
                  </div>
            </>
      );
}

export default MyComponent;