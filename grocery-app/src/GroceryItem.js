import React from "react";

const GroceryItem = (props) => {
  const { item, brand, price, quantity, isPurchased } = props.data;
  return (
    <div className="grocery-item">
      <p>
        <span>
          {item} - {brand}
        </span>
      </p>
      <p>{quantity}</p>
      <p>{price}</p>
    </div>
  );
};

export default GroceryItem;
