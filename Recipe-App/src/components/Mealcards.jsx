import React from "react";
import { NavLink } from "react-router-dom";

function Mealcards({ detail }) {
  console.log(detail);

  return (
    <div className="meals">
      {!detail
        ? ""
        : detail.map((currItem) => {
            return (
              <div key={currItem.idMeal} className="meal-card">
              
                <img src={currItem.strMealThumb} alt="dishes" loading="lazy"/>
                <p>{currItem.strMeal}</p>

                <NavLink 
                to={`/${currItem.idMeal}`}
                ><button>Recipe</button></NavLink>

              </div>
            );
          })}
    </div>
  );
}

export default Mealcards;
