import React, { useState } from "react";
import CardList from "./CardList"; // import the Card component
import SearchField from "./SearchBox"; // import the SearchField component
import { robots } from '../robots'

function App () {
    const [robot, setRobot] = useState(robots)
    const [searchField, setsearchField] = useState('')
    
    const filteredRobots = robot.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    
    function onSearchChange(event) {
      setsearchField(event.target.value)
    }


  return (
    <div className="tc">
        <h1>RoboFriends</h1>
        <SearchField searchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;