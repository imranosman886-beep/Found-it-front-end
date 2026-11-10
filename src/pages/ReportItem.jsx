import { useState } from "react";
import { addItem } from "../services/api";
import "../styles/ReportItem.css";

function ReportItem() {
  const [formData, setFormData] = useState({
    type: "Lost",
    name: "",
    category: "",
    description: "",
    location: "",
    date: "",
    contact: "",
    image: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file.");
        return;
      }

      setFormData((prev) => ({
        ...prev,
        image: file.name,
      }));

      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      addItem(formData);

      setMessage("Your report has been submitted successfully!");
      setError("");

      setFormData({
        type: "Lost",
        name: "",
        category: "",
        description: "",
        location: "",
        date: "",
        contact: "",
        image: "",
      });

      e.target.reset();
    } catch {
      setError("Something went wrong. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="report-page">
      <div className="report-container">
        <div className="report-header">
          <h1>Report an Item</h1>
          <p>
            Help reunite lost belongings with their owners.
            Submit the details below.
          </p>
        </div>

        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form className="report-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>What are you reporting?</label>

            <div className="report-type-options">
              <label className="type-option">
                <input
                  type="radio"
                  name="type"
                  value="Lost"
                  checked={formData.type === "Lost"}
                  onChange={handleChange}
                />
                <span>Lost Item</span>
              </label>

              <label className="type-option">
                <input
                  type="radio"
                  name="type"
                  value="Found"
                  checked={formData.type === "Found"}
                  onChange={handleChange}
                />
                <span>Found Item</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Item Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Samsung phone"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Bags">Bags</option>
              <option value="Clothing">Clothing</option>
              <option value="Documents">Documents</option>
              <option value="Accessories">Accessories</option>
              <option value="Keys">Keys</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe the item, including its color, brand and unique features..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Where was it lost or found?"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="e.g. 0712345678"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Upload Item Image (Optional)</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            {formData.image && (
              <small>Selected image: {formData.image}</small>
            )}
          </div>

          <button type="submit" className="submit-report-btn">
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportItem;
