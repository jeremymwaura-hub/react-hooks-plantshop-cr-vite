import { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";

function App() {
  // state for storing plants
  const [plants, setPlants] = useState([]);

  // state for search input
  const [search, setSearch] = useState("");

  // fetch plants from backend
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // add new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // filter plants using search query
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <Header />

      <Search search={search} setSearch={setSearch} />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <PlantPage plants={displayedPlants} />
    </main>
  );
}

export default App;