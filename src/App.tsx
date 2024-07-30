import React from "react";
import { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import "./App.css";
import { Recipe } from "./types/common";

const recipes: Recipe[] = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry",
    ingredients: [
      "1 kg chicken",
      "2 onions, chopped",
      "3 tomatoes, chopped",
      "2 tbsp curry powder",
      "1 tsp turmeric",
      "1 tsp cumin",
      "1 tsp coriander",
      "2 garlic cloves, minced",
      "1 inch ginger, grated",
      "Salt to taste",
      "1 cup coconut milk",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Heat oil in a pan and sauté onions until golden.",
      "Add garlic, ginger, and spices, and cook for 2 minutes.",
      "Add tomatoes and cook until soft.",
      "Add chicken and cook until it changes color.",
      "Pour in coconut milk, add salt, and simmer until chicken is cooked.",
      "Garnish with fresh coriander and serve hot."
    ],
    imageURL: "/images/chicken-curry.jpg",
    cookingTime: "45 minutes",
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
    ingredients: [
      "500g ground beef",
      "Salt and pepper",
      "4 hamburger buns",
      "Lettuce leaves",
      "4 slices of cheese",
      "1 tomato, sliced",
      "1 onion, sliced",
      "Pickles",
      "Ketchup and mustard"
    ],
    instructions: [
      "Season the ground beef with salt and pepper and form into patties.",
      "Cook the patties on a grill or pan to desired doneness.",
      "Toast the buns lightly on the grill.",
      "Assemble the burger with lettuce, tomato, cheese, onions, and pickles.",
      "Add ketchup and mustard to taste and serve."
    ],
    imageURL: "/images/hamburger.jpg",
    cookingTime: "20 minutes",
  },
  {
    author: "Sophia",
    name: "Vegetable Stir-Fry",
    description: "A quick and healthy vegetable stir-fry",
    ingredients: [
      "2 tbsp vegetable oil",
      "1 bell pepper, sliced",
      "1 carrot, julienned",
      "1 zucchini, sliced",
      "1 cup broccoli florets",
      "2 garlic cloves, minced",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp sesame oil",
      "Salt and pepper",
      "Cooked rice, for serving"
    ],
    instructions: [
      "Heat oil in a wok or large pan.",
      "Add garlic and stir-fry until fragrant.",
      "Add vegetables and stir-fry for 5-7 minutes.",
      "Add soy sauce, oyster sauce, sesame oil, and seasoning.",
      "Toss well and cook for another 2-3 minutes.",
      "Serve hot with rice."
    ],
    imageURL: "/images/vegetable-stir-fry.jpg",
    cookingTime: "15 minutes",
  },
  {
    author: "Maria",
    name: "Pasta Carbonara",
    description: "Classic Italian pasta with creamy sauce and bacon",
    ingredients: [
      "400g spaghetti",
      "150g pancetta or bacon, diced",
      "2 large eggs",
      "100g Parmesan cheese, grated",
      "2 cloves garlic, minced",
      "Salt and black pepper",
      "Fresh parsley, chopped"
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a large pan, cook pancetta until crispy. Add garlic and cook briefly.",
      "In a bowl, beat eggs and mix with Parmesan cheese.",
      "Drain spaghetti and add to the pan with pancetta.",
      "Remove from heat, add the egg and cheese mixture, and toss quickly to coat the pasta.",
      "Season with salt and pepper, garnish with parsley, and serve immediately."
    ],
    imageURL: "/images/pasta-carbonara.jpg",
    cookingTime: "20 minutes",
  },
  {
    author: "Liam",
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake with chocolate frosting",
    ingredients: [
      "1 and 1/2 cups flour",
      "1 and 1/2 cups sugar",
      "3/4 cup cocoa powder",
      "1 and 1/2 tsp baking powder",
      "1 and 1/2 tsp baking soda",
      "1 tsp salt",
      "2 large eggs",
      "1 cup milk",
      "1/2 cup vegetable oil",
      "2 tsp vanilla extract",
      "1 cup boiling water",
      "Chocolate frosting"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round pans.",
      "In a large bowl, combine dry ingredients.",
      "Add eggs, milk, oil, and vanilla; beat on medium speed for 2 minutes.",
      "Stir in boiling water (batter will be thin).",
      "Pour batter into prepared pans and bake for 30-35 minutes.",
      "Cool in pans for 10 minutes, then remove from pans and cool completely.",
      "Frost with chocolate frosting and serve."
    ],
    imageURL: "/images/chocolate-cake.jpg",
    cookingTime: "45 minutes",
  },
]

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  return (
    <div className="flex p-10 gap-4">
      <div className="w-1/3 border-4">
        {
          recipes.map((recipe: Recipe, key: number) => {
            return <RecipeList recipe={recipe} key={key} onRecipeSelect={setSelectedRecipe} />
          })
        }
      </div>
      <div className="w-2/3">
        {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
      </div>
    </div>
  )
}

export default App;
