// OWNER: Beatrice


import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import "./BrowseItems.css";

function BrowseItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/items")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesStatus =
      selectedStatus === "All" ||
      item.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  if (loading) {
    return <p>Loading items...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="browse-items-page">

      <div className="browse-header">
        <h1>Browse Lost & Found Items</h1>
        <p>Find what you've lost or help someone find their belongings.</p>
      </div>

      <div className="browse-filters">

        <input
          type="text"
          placeholder="Search by item name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Documents">Documents</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="All">All Items</option>
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>

      </div>

      <div className="browse-results">
        <h2>Available Items ({filteredItems.length})</h2>

        {filteredItems.length > 0 ? (
          <ItemList items={filteredItems} />
        ) : (
          <p>No items found. Try another search.</p>
        )}
      </div>

    </div>
  );
}

export default BrowseItems;
