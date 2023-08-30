import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchCreateRecipe } from '../store/recipes'
import { TextField, Button } from '@material-ui/core'


const AddRecipe = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [characterName, setCharacterName] = useState('');
    const [recipeName, setRecipeName] = useState('');
    const [recipeDescription, setDescription] = useState('');
    const [recipeIngredients, setIngredients] = useState('');
    const [characterImage, setImage] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault()

        dispatch(fetchCreateRecipe({ 
            characterName, recipeName, recipeDescription, recipeIngredients, characterImage 
        }))
        
        setCharacterName('');
        setRecipeName('');
        setDescription('');
        setIngredients('');
        setImage('');

        navigate('/characterRecipes')

    }

    
    // const handleSubmit = (evt) => {
    //     evt.preventDefault()
    //     const characterName = evt.target.characterName.value
    //     const recipeName = evt.target.recipeName.value
    //     const description = evt.target.recipeDescription.value
    //     const ingredients = evt.target.recipeIngredients.value
    //     const image = evt.target.characterImage.value

    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Character Name"
                    value={characterName}
                    onChange={(evt) => setCharacterName(evt.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Recipe Name"
                    value={recipeName}
                    onChange={(evt) => setRecipeName(evt.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    value={recipeDescription}
                    onChange={(evt) => setDescription(evt.target.value)}
                    fullWidth
                    multiline
                    margin="normal"
                />
                <TextField
                    label="Ingredients"
                    value={recipeIngredients}
                    onChange={(evt) => setIngredients(evt.target.value)}
                    fullWidth
                    multiline
                    margin="normal"
                />
                <TextField
                    label="Character Image"
                    value={characterImage}
                    onChange={(evt) => setImage(evt.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Recipe
                </Button>
            </form>
        </div>
    )
}

export default AddRecipe