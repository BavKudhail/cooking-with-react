import React from "react";
import RecipeList from "./RecipeList";

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on Chicken\n2. Put chicken in over\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put chicken in over\n3. Eat pork",
    ingredients: [
      {
        id: 2,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 3,
        name: "Paprika",
        amount: "1 tsb",
      },
    ],
  },
];

// Consumer
function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

export default App;
