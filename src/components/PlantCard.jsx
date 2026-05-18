import { useState } from "react";

function PlantCard({ plant }) {
  // state for sold out button
  const [soldOut, setSoldOut] = useState(false);

  function handleSoldOut() {
    setSoldOut(!soldOut);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: ${plant.price}</p>

      {soldOut ? (
        <button className="primary" onClick={handleSoldOut}>
          Sold Out
        </button>
      ) : (
        <button onClick={handleSoldOut}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;