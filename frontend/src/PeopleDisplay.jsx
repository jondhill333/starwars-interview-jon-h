import React, { useState, useEffect } from "react";
import PersonComponent from "./PersonComponent";

const PeopleDisplay = () => {
  const [people, setPeople] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
 
  useEffect(() => {
    const fecthData = async () => {
      try {
        fetch(`http://localhost:3000/${searchTerm ? `?search=${searchTerm.toLowerCase()}` : ""}`)
        .then(response => response.json())
        .then(data => setPeople(data))
  
      } catch (error) {
        return <div>Something went wrong</div>
      }
    }
    fecthData()

  }, [searchTerm])


  return (
  <>
  <label htmlFor="search">Enter Search term to filter results</label>
    <input
      style={{display: "block"}}
      name="search"
      onChange={(e) => setSearchTerm(e.target.value)}
      placehoder="Enter Search term"
      type="text">
    </input>
    <ul>
      {people ? people?.map(person => <PersonComponent key={person.name} p={person} />) : 'Loading'}
    </ul>
  </>
  );
}

export default PeopleDisplay;