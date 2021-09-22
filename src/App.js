import "./App.css";
import { Divider } from "antd";
import foods from "./foods.json" ;
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import {useState} from 'react'

function App() {
  //console.log(foods)
  //console.log(foods[0].name)
  const [foodList, setFoodList] = useState(foods)
  return (
    <div className="App">
      <Divider><h1>Add Food Entry</h1></Divider>
      <AddFoodForm setFoodList={setFoodList} food={foodList} />
      <Divider><h1>Food List</h1></Divider>
      <FoodBox food={foodList} />

    </div>
  );
}
export default App;