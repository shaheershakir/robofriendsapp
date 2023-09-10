import React, { useEffect, useState } from "react";
import CardList from "./CardList"; // import the Card component
import SearchField from "./SearchBox"; // import the SearchField component
import Scroll from "./Scroll"; // import the Scroll component
import "../App.css";

function App () {
    const [robot, setRobot] = useState([])
    const [searchField, setsearchField] = useState('')
    
    const filteredRobots = robot.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    function onSearchChange(event) {
      setsearchField(event.target.value)
    }

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobot(users)})
    })

     return !robot.length ? (
      <h1>Loading</h1>
      ) : (
          <div className="tc">
              <h1>RoboFriends</h1>
              <SearchField searchChange={onSearchChange} />
              <Scroll>
                <CardList robots={filteredRobots} />
              </Scroll>
          </div>
       );   
}

export default App;