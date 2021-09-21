import "./App.css";
import foods from "./foods.json";
import {useState} from 'react';

function App() {
  //console.log(foods)
  //console.log(foods[0].name)

  const [food, setFood] = useState(foods)
  return <div className="App">
    <h1>Food List</h1>

    {food.map((element) => {
      return(
        <div>
          <p>{element.name}</p>
          <img src={element.image} width={100} alt="" />
        </div>
      )
    })}
    
  </div>;
}
export default App;