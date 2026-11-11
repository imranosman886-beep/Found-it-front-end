// OWNER: Faith

import { useState } from "react";
import "../styles/Admin.css";

const initialItems = [
  { id: 1, name: "Black Backpack", type: "Lost", location: "Library", status: "Pending" },
  { id: 2, name: "Student ID", type: "Found", location: "Cafeteria", status: "Pending" },
  { id: 3, name: "Wireless Earphones", type: "Lost", location: "Lecture Hall", status: "Approved" },
];

function AdminDashboard() {
  const [items, setItems] = useState(initialItems);

  const updateStatus = (id, status) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  const pending = items.filter((item) => item.status === "Pending").length;
  const approved = items.filter((item) => item.status === "Approved").length;
  const rejected = items.filter((item) => item.status === "Rejected").length;

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Manage and review reported lost and found items.</p>

      <div className="admin-stats">
        <div className="admin-stat">
          <h3>Total Items</h3>
          <p>{items.length}</p>
        </div>

        <div className="admin-stat">
          <h3>Pending</h3>
          <p>{pending}</p>
        </div>

        <div className="admin-stat">
          <h3>Approved</h3>
          <p>{approved}</p>
        </div>

        <div className="admin-stat">
          <h3>Rejected</h3>
          <p>{rejected}</p>
        </div>
      </div>

      <h2>Reported Items</h2>

      <div className="admin-items">
        {items.map((item) => (
          <div className="admin-item" key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>Type: {item.type}</p>
              <p>Location: {item.location}</p>
              <p>Status: {item.status}</p>
            </div>

            {item.status === "Pending" && (
              <div className="admin-actions">
                <button onClick={() => updateStatus(item.id, "Approved")}>
                  Approve
                </button>

                <button onClick={() => updateStatus(item.id, "Rejected")}>
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
