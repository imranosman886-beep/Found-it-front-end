// OWNER: Faith

import { useState } from "react";
import "../styles/MyReports.css";

const mockReports = [
  {
    id: 1,
    name: "Black Backpack",
    type: "Lost",
    location: "Library",
    date: "2026-11-08",
    status: "Pending",
  },
  {
    id: 2,
    name: "Student ID Card",
    type: "Found",
    location: "Main Cafeteria",
    date: "2026-11-09",
    status: "Approved",
  },
  {
    id: 3,
    name: "Wireless Earphones",
    type: "Lost",
    location: "Lecture Hall",
    date: "2026-11-10",
    status: "Claimed",
  },
];

function MyReports() {
  const [reports] = useState(mockReports);
  const [filter, setFilter] = useState("All");

  const filteredReports =
    filter === "All"
      ? reports
      : reports.filter((report) => report.status === filter);

  return (
    <div className="my-reports-page">
      <header className="reports-header">
        <h1>My Reports</h1>
        <p>Track and manage the items you have reported.</p>
      </header>

      <div className="reports-summary">
        <div className="summary-card">
          <h3>Total Reports</h3>
          <p>{reports.length}</p>
        </div>

        <div className="summary-card">
          <h3>Pending</h3>
          <p>{reports.filter((r) => r.status === "Pending").length}</p>
        </div>

        <div className="summary-card">
          <h3>Approved</h3>
          <p>{reports.filter((r) => r.status === "Approved").length}</p>
        </div>
      </div>

      <div className="reports-filters">
        <label htmlFor="status-filter">Filter by status:</label>

        <select
          id="status-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Reports</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          <option value="Claimed">Claimed</option>
        </select>
      </div>

      <div className="reports-list">
        {filteredReports.length === 0 ? (
          <p>No reports found for this status.</p>
        ) : (
          filteredReports.map((report) => (
            <article className="report-card" key={report.id}>
              <div className="report-info">
                <h3>{report.name}</h3>
                <p>Type: {report.type}</p>
                <p>Location: {report.location}</p>
                <p>Date: {report.date}</p>
              </div>

              <span
                className={`report-status status-${report.status.toLowerCase()}`}
              >
                {report.status}
              </span>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export default MyReports;
