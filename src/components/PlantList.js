import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantInfo }) {

// const [plantInfo, setPlantInfo] = useState([])

// useEffect(() => {
//   fetch("http://localhost:6001/plants")
//   .then(response => response.json())
//   .then(data => setPlantInfo(data))
// },[])

// console.log(plantInfo)
  return (
    <ul className="cards">
      {plantInfo.map(plant => (
        <PlantCard name={plant.name} image={plant.image} key={plant.id} price={plant.price}/>
      ))}
     
      </ul>
  );
}

export default PlantList;
