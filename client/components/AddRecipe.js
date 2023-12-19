import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchCreateRecipe } from '../store/recipes'
import { TextField, Button, Box } from '@material-ui/core'


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


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" className="textfield-boxes">
                    <div>
                        <TextField
                            label="Character Name"
                            value={characterName}
                            onChange={(evt) => setCharacterName(evt.target.value)}
                            fullWidth
                            margin="normal"
                            className='textfield-boxes'
                            style={{ display: 'block', marginBottom: '16px', }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Recipe Name"
                            value={recipeName}
                            onChange={(evt) => setRecipeName(evt.target.value)}
                            fullWidth
                            margin="normal"
                            className='textfield-boxes'
                            style={{ display: 'block', marginBottom: '16px'}}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Description"
                            value={recipeDescription}
                            onChange={(evt) => setDescription(evt.target.value)}
                            fullWidth
                            multiline
                            margin="normal"
                            className='textfield-boxes'
                            style={{ display: 'block', marginBottom: '16px'}}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Ingredients"
                            value={recipeIngredients}
                            onChange={(evt) => setIngredients(evt.target.value)}
                            fullWidth
                            multiline
                            margin="normal"
                            className='textfield-boxes'
                            style={{ display: 'block', marginBottom: '16px'}}
                        />
                    </div>
                    <div>
                    <TextField
                        label="Character Image"
                        value={characterImage}
                        onChange={(evt) => setImage(evt.target.value)}
                        fullWidth
                        margin="normal"
                        className='textfield-boxes'
                        style={{ display: 'block', marginBottom: '16px'}}
                    />
                    </div>
                    <Button type="submit" variant="contained" color="primary">
                        Add Your Own Inspiration!
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default AddRecipe