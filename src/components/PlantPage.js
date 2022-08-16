import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantInfo, setPlantInfo] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlantInfo(data))
  },[])
  
  console.log(plantInfo)

  return (
    <main>
      <NewPlantForm plantInfo={plantInfo}/>
      <Search plantNames={plantInfo}/>
      <PlantList plantInfo={plantInfo}/>
    </main>
  );
}

export default PlantPage;
