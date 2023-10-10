import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Body() {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handle = () => {
    localStorage.setItem("name", search)
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    handle(); // Save the city name to local storage
    navigate("/App"); // Navigate to the "/App" route
  };

  return (
    <>
      <div className="form-floating my-5 height">
        <form onSubmit={handleSubmit}>
          <div className="cont1 mb-2">
            <input className="form-control"
              type="name"
              placeholder="Enter city/town..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="cont1">
            <button type="submit" class="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    </>
  )
}
