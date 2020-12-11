import React from "react";

const TotalDisplay = ({ total }) => {
  return (
    <div className="total-container">
      <p className="label">Total:</p>
      <p>${total}</p>
    </div>
  );
};

export default TotalDisplay;
