import React, { useState, useEffect } from "react";
import { doExtractYearFromBBY } from "./utils";
import { Link } from 'react-router-dom'


const PersonComponent = (person) => {
  const { name, birth_year, url } = person.p

  const personId = url.slice(-2,-1);

  let year = 0;

  try {
    year = doExtractYearFromBBY(birth_year)
    console.log(year)
  } catch(error) {
    console.log(error)
  }

  return (
    <div>
      <h3>
        <Link to={personId}>
        {name}
        </Link>
      </h3>
      <div>Birth date: {birth_year}</div>
      {year && year !== 0 && year !== "unknown" && (
        <>
        <div>Birth year: {year}</div>
        <div>Is even? {year && year % 2 !== 0 ? "No" : "Yes"}</div>
        </>
      )}
    </div>
  )
}

export default PersonComponent;
