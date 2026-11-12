// OWNER: Beatrice


import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ item }) {
  const {
    id,
    name,
    category,
    status,
    location,
    date,
    image,
    description
  } = item;

  return (
    <div className="item-card">

      <div className="item-card-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="image-placeholder">
            No image available
          </div>
        )}
      </div>

      <div className="item-card-content">

        <div className="item-card-heading">
          <h3>{name}</h3>

          <span className={`item-status ${status?.toLowerCase()}`}>
            {status}
          </span>
        </div>

        <p className="item-category">
          Category: {category}
        </p>

        <p className="item-location">
          Location: {location}
        </p>

        <p className="item-date">
          Date: {date}
        </p>

        {description && (
          <p className="item-description">
            {description}
          </p>
        )}

        <Link to={`/items/${id}`} className="view-details-btn">
          View Details
        </Link>

      </div>
    </div>
  );
}

export default ItemCard;


