import './App.css'
import ClassBasedComponent from "./component/class-based-component"
import FunctionalComponent from "./component/functional-based-component"
import ProductList from "./component/products/index"
function App() {

  return (
      <div>
        <h1>React js concepts</h1>
        {/* <ClassBasedComponent/>
        <FunctionalComponent/> */}
        <ProductList/>

      </div>
  )
}

export default App;
