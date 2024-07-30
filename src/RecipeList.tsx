import React from 'react'
import { Recipe } from './types/common';

const RecipeList = ({ recipe, onRecipeSelect }:{recipe:Recipe,onRecipeSelect :(recipe: Recipe) => void}) => {
    return (
        <div className='flex gap-4 mt-2 border-b-2'>
            <div>
                <img src={recipe.imageURL} className='h-24 w-24'alt="food_image"/>
            </div>
            <div>
                <h1 className='font-bold'>{recipe.name}</h1>
                <p className='mt-3 text-gray-500 cursor-pointer underline'
                onClick={() => onRecipeSelect(recipe)}>View recipe details</p>
            </div>
        </div>
      );
}

export default RecipeList