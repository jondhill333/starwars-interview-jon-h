import React, { useState, useEffect } from "react";
import PeopleDisplay from "./PeopleDisplay";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from "./Details";

const App = () => {
 

  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<PeopleDisplay />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </Router>


  );
}

export default App;