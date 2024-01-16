import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Card, CardContent, Typography, Button } from "@material-ui/core"
import ProfileSlider from "./Slider"
import Banner from "./Banner"
import { fetchFavoriteRecipes } from "../store/userRecipes"
import { fetchFavoriteRecipe } from "../store/userRecipe"

const Profile = () => {
    const user = useSelector((state) => state.user)
    const recipes = user?.recipes || []
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFavoriteRecipes(user.id))
    }, [dispatch, user.id])


    if (!user) {
        return (
            <Container className='profile'>
                <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Apologies!! No user exists
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        );
    }

    const favoriteRecipes = recipes.filter((recipe) => recipe.user_recipe.favorite == true)

    return (
        <Container className='profile'>
            <Banner user={user} />
            <Card>
                <CardContent>
                    <Typography>
                    {favoriteRecipes.length > 0 ? (
                            <div>
                                <Typography>
                                    <h2>Favorite Recipes</h2>
                                    {favoriteRecipes.map((recipe) => (
                                        <Link key={recipe.id} to={`/characterRecipes/${recipe.id}`}>
                                            <Typography>{recipe.recipeName}</Typography>
                                            <img src={recipe.characterImage} />
                                        </Link>
                                    ))}
                                </Typography>
                                {/* <ProfileSlider recipes={favoriteRecipes}/> */}
                            </div>
                        ) : (
                            <div>
                                <Link to={'/add'}>
                                    <Button className='add-button' variant='contained' color='primary'>Add a favorite</Button>
                                </Link>
                                
                                <Typography>
                                    <h2>No Favorite Recipes Yet</h2>
                                </Typography>
                            </div>
                        )}
                        </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}


export default Profile



    // const favoriteRecipes = recipes.filter(
    //     (recipe) => recipe.user_recipe.favorite === true
    // );

    // {recipes.filter((recipe) => recipe.user_recipe.favorite === true).length > 0 ? (
    //     <Link to={`/characterRecipes/${recipes.id}`}>
    
    //     </Link>
    // ) : (
    //     <div>
    //         <Button>Add a favorite</Button>
    //         <Typography>
    //             <h2>Favorite Recipes</h2>
    //             <ProfileSlider />
    //         </Typography>
    //     </div>
    // )}

