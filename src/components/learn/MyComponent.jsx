// Rule Component name must be in PascalCase, myComponent -> MyComponent
// Component = html + css + js
// jsx => chi tra ve 1 thang parent duy nhat
import './style.css';
const MyComponent = () => {
      return (
            <>
                  <div>  My Do Minh Quan Component </div>
                  <div className="child"
                        style={{ borderRadius : "10px", borderColor:"red" }}>
                        child 
                  </div>
            </>
      );
}

export default MyComponent;