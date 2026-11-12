// OWNER: Beatrice

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemDetails.css";

function ItemDetails() {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/items/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Item not found");
        }
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="details-message">Loading item details...</p>;
  }

  if (error) {
    return <p className="details-message">{error}</p>;
  }

  return (
    <div className="item-details-page">

      <Link to="/browse" className="back-link">
        ← Back to Browse Items
      </Link>

      <div className="item-details-container">

        <div className="details-image">
          {item.image ? (
            <img src={item.image} alt={item.name} />
          ) : (
            <div className="details-placeholder">
              No image available
            </div>
          )}
        </div>

        <div className="details-content">

          <span className={`details-status ${item.status?.toLowerCase()}`}>
            {item.status}
          </span>

          <h1>{item.name}</h1>

          <p className="details-description">
            {item.description || "No description provided."}
          </p>

          <div className="details-information">

            <p>
              <strong>Category:</strong> {item.category}
            </p>

            <p>
              <strong>Location:</strong> {item.location}
            </p>

            <p>
              <strong>Date reported:</strong> {item.date}
            </p>

          </div>

          <Link to="/browse" className="details-button">
            Back to Items
          </Link>

        </div>

      </div>
    </div>
  );
}

export default ItemDetails;
