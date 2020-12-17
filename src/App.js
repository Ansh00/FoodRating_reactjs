import React, { useState } from "react";
import "./styles.css";
import { foodData } from "./datanew";
export default function App() {
  var foodsList = [
    "all foods",
    "Street  foods",
    "Punjabi foods",
    "Rajisthan foods"
  ];

  console.log("foodsList", foodsList);
  const [foodCategory, setfoodCategory] = useState("all foods");

  function getfoods(category) {
    setfoodCategory(category);
  }

  return (
    <div className="App">
      <h1>GoodFood</h1>
      <h2>Best rated food!! </h2>
      <hr />
      <div className="foodList">
        {foodsList.map((category) => {
          return (
            <button
              key={category}
              value={category}
              onClick={() => getfoods(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div>
        {foodData[foodCategory].map((food) => {
          return (
            <div className="food">
              <div className="food-info">
                <h1>
                  <em>{food.name}</em>{" "}
                </h1>

                <h3>Rating : {food.Rating}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
