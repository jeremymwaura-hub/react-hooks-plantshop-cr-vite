import PlantCard from "./PlantCard";

function PlantPage({ plants }) {
  return (
    <main>
      <ul className="cards">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </ul>
    </main>
  );
}

export default PlantPage;