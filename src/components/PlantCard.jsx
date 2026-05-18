import { useState } from "react";

function PlantCard({ plant }) {
  // local state for sold out button
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleSoldOut() {
    setIsSoldOut(!isSoldOut);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: ${plant.price}</p>

      {isSoldOut ? (
        <button className="sold-out" onClick={handleSoldOut}>
          Sold Out
        </button>
      ) : (
        <button onClick={handleSoldOut}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;