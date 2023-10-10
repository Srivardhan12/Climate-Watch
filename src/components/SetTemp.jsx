import React, { useState } from "react";

function SetTemp() {
  const [mini, setMinimum] = useState("");
  const [maxi, setMaximum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("minimum", mini);
    localStorage.setItem("maximum", maxi);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="minimum">Minimum Temperature:</label>
        <input
          className="form-control mb-3"
          type="number"
          id="minimum"
          value={mini}
          onChange={(e) => setMinimum(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="maximum">Maximum Temperature:</label>
        <input
          className="form-control mb-3"
          type="number"
          id="maximum"
          value={maxi}
          onChange={(e) => setMaximum(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
}

export default SetTemp;


