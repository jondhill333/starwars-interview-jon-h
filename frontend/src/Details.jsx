import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Details = () => {
  const [person, setPerson] = useState(null)
  const { pathname } = useLocation()

  const shareData = {
    url: `http://localhost:3000/${pathname}`,
  };

  useEffect(  () => {
    const fecthData = async () => {
      try {
      await fetch(`http://localhost:3000${pathname}`)
        .then(response => response.json())
        .then(data => setPerson(data[0]))
  
      } catch (error) {
        return <div>Something went wrong</div>
      }
    }
    fecthData()
  }, [])


  const handleClick = () => {
    navigator.share(shareData)
  }

  return (
    <>
    <div>{person && person.name}</div>
    <button onClick={handleClick}>Share</button>
    </>
  )
}

export default Details;