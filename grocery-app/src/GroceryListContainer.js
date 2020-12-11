import React from "react";
import GroceryItem from "./GroceryItem";
import TotalDisplay from "./TotalDisplay";

const groceries = [
  {
    item: "Lemons",
    brand: "Organic",
    price: "4",
    quantity: "12",
    isPurchased: false,
  },
  {
    item: "Tequila",
    brand: "Trader Joe's",
    price: "12",
    quantity: "1",
    isPurchased: false,
  },
  {
    item: "Triple Sec",
    brand: "Organic",
    price: "5",
    quantity: "1",
    isPurchased: false,
  },
  {
    item: "Bulk Oats",
    brand: "Organic",
    price: "16",
    quantity: "14lb",
    isPurchased: false,
  },
  {
    item: "Bulk Gummy Bears",
    brand: "Organic",
    price: "14",
    quantity: "8lb",
    isPurchased: false,
  },
  {
    item: "Redvines",
    brand: "Organic",
    price: "10",
    quantity: "8lb",
    isPurchased: false,
  },
  {
    item: "Pringles (ORIGINAL *ONLY*, MOM)",
    brand: "Pringles",
    price: "3",
    quantity: "2",
    isPurchased: false,
  },
  {
    item: "Red Peppers",
    brand: "Organic",
    price: "4",
    quantity: "5",
    isPurchased: false,
  },
];
let totalValue = 0;

const GroceryListContainer = () => {
  return (
    <div className="list-container">
      <h1>My Groceries</h1>
      {groceries.map((currentGroceryItem, i) => {
        if (currentGroceryItem.isPurchased === false) {
          totalValue += parseInt(currentGroceryItem.price);
          return <GroceryItem data={currentGroceryItem} />;
        }
        return totalValue;
      })}
      <TotalDisplay total={totalValue} />
    </div>
  );
};

export default GroceryListContainer;
