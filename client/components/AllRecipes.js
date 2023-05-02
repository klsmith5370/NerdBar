import React, { useState } from 'react'
import { useSelector } from 'react-redux'


export const AllRecipes = () => {
    let recipes = useSelector((state) => state.recipes)

}