import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import PlantList from "./components/PlantList";
import NewPlantForm from "./components/NewPlantForm";

function App() {
  // state for storing plants from backend
  const [plants, setPlants] = useState([]);

  // state for search input
  const [search, setSearch] = useState("");

  // fetch all plants when app loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // function for adding new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // filter plants using search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header />

      <Search search={search} setSearch={setSearch} />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <PlantList plants={filteredPlants} />
    </div>
  );
}

export default App;