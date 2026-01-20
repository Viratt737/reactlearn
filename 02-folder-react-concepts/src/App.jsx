import './App.css'
import ClassBasedComponent from "./component/class-based-component"
import FunctionalComponent from "./component/functional-based-component"
function App() {

  return (
      <div>
        <h1>React js concepts</h1>
        <ClassBasedComponent/>
        <FunctionalComponent/>
      </div>
  )
}

export default App;
