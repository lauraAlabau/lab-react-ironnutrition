import "./App.css";
import { Row, Divider } from "antd";
import foods from "./foods.json" ;
import FoodBox from "./components/FoodBox";

function App() {
  //console.log(foods)
  //console.log(foods[0].name)


  return (
    <div className="App">
      <Divider><h1>Food List</h1></Divider>
     
        <FoodBox food={foods}/>

    </div>
  );
}
export default App;