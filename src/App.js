import "./App.css";
import { Divider } from "antd";
import {useState} from 'react'
import foods from "./foods.json" ;
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  //console.log(foods)
  //console.log(foods[0].name)
  const [foodList, setFoodList] = useState(foods)


  
  return (
    <div className="App">
      <Divider><h2>Add Food Entry</h2></Divider>
      <AddFoodForm setFoodList={setFoodList} food={foodList} />
      <Divider><h2>Search</h2></Divider>
      <Search setFoodList={setFoodList} food={foodList}/>
      <Divider><h2>Food List</h2></Divider>
      <FoodBox food={foodList}/>
    </div>
  );
}
export default App;