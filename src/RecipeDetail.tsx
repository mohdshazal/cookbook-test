import React from 'react'
import { Recipe } from './types/common'

const RecipeDetail = ({ recipe }:{recipe:Recipe}) => {
    return (
        <div className='border-4'>
            <div>
                <img src={recipe.imageURL} alt='' className='w-full h-80' />
            </div>
            <div className='flex justify-center font-bold text-2xl mt-2'>
                <h2>{recipe.name}</h2>
            </div>
            <div className='text-gray-400 text-base ml-3'>
                <p>Published by : {recipe.author}</p>
                <p>Cooking Time : {recipe.cookingTime}</p>
            </div>
            <div className='ml-5 p-3 text-gray-700'>
                <p>Ingredients</p>
                <ul className='list-disc'>
                    {
                        recipe.ingredients.map((ingredient,key)=>{
                            return <li key={key}>{ingredient}</li>
                        })
                    }
                </ul>
            </div>
            <div className='ml-3 mb-3 text-gray-700'>
                <p>Instruction : {recipe.instructions}</p>
            </div>
        </div>
    )
}

export default RecipeDetail