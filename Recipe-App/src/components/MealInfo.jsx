import React, { useState } from "react";
import { useParams } from "react-router-dom";

function MealInfo() {
  const { mealid } = useParams();

  const [info, setInfo] = useState();
  console.log(mealid);

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );

    const jsonData = await get.json();

    console.log(jsonData.meals[0]);
    setInfo(jsonData.meals[0]);
  };

  if (info != "") {
    getInfo();
  }

  return (
    <div className="recipe-container">
      {!info ? (
        "data not found"
      ) : (
        <div className="meal-info">
          <img src={info.strMealThumb} alt="" />
          <div className="info">
            <h1>Recipe Detail</h1>
            <p className="meal-name">Name : {info.strMeal}</p>
            <h3>Instruction</h3>
            <p className="instruction">{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MealInfo;
