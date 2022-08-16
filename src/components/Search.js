import React, { useState } from "react";

function Search({ plantNames }) {
const [filteredResults, setFilteredResults] = useState([]);

let names = plantNames.map(plant => plant.name)


function handleChange(e) {
  const filteredData = names.filter((name) => {
    return Object.values(name).join('').toLowerCase().includes(e.target.value.toLowerCase())
    })
  setFilteredResults(filteredData)
  console.log(filteredResults)
}
  return (

    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
