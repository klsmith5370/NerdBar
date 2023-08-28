import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchCreateRecipe } from '../store/recipes'

// need to import MaterialUI components for form
// import createRecipe thunk from store

const AddRecipe = () => {
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const characterName = evt.target.characterName.value
        const recipeName = evt.target.recipeName.value
        const description = evt.target.recipeDescription.value
        const ingredients = evt.target.recipeIngredients.value
        const image = evt.target.characterImage.value

    }

    return (
        <div>
            
        </div>
    )
}