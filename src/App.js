import { useState, useEffect } from "react";
import "./App.css";
import Restaurants from "./Restaurants.jsx";
import {useRecoilState} from "recoil"

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchResults, setSearchResults] = useState("")
  const [reRender, setReRender] = useState(false)
  /// change use effect to fucntion that called when user clicks search button ///
  useEffect(() => {
    let foodType = searchResults
    fetch(`http://localhost:8000/restaurant/${foodType}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setRestaurants(data)
      });
  }, []);
  return <div className="App" > 
  <Restaurants setReRender={setReRender} restaurants={restaurants} setRestaurants={setRestaurants} searchResults={searchResults} />
  </div>;
}

export default App;
