import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Container, Card, CardContent, Typography, Button } from "@material-ui/core"
import ProfileSlider from "./Slider"
import Banner from "./Banner"


const Profile = () => {
    const user = useSelector((state) => state.user)
    const recipes = user?.recipes || []

    const favoriteRecipes = recipes.filter(
        (recipe) => recipe.user_recipe.favorite === true
    )[0];

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

    return (
        <Container className='profile'>
            <Banner user={user} />
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {user.username}
                    </Typography>

                    <Typography className='featured'>
                        {favoriteRecipes ? (
                            <Link>

                            </Link>
                        ) : (
                            <div>
                                <h4>No favorite recipe</h4>
                                <h4>Add a favorite</h4>
                            </div>
                        )}
                    </Typography>

                    <Typography className='favorite'>
                        <h2>Favorite Recipes</h2>
                        <ProfileSlider recipes={favoriteRecipes} />
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Profile