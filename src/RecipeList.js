import React from "react";
import Recipe from "./Recipe";

// Recipe list functional component
export default function RecipeList({ recipes }) {
  return (
    <>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <button>Add Recipe</button>
    </>
  );
}
