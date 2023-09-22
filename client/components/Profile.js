import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Container } from "@material-ui/core"
// import Banner from "./Banner"
// import SimpleSlider from "./SimpleSlider"

const Profile = () => {
    const user = useSelector((state) => state.user)
    const recipes = user?.recipes || []

    const favoriteRecipe = recipes.find((recipe) => recipe.user_recipe.favorite === true)

    
}