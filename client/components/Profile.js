import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Card, CardContent, Typography, Button } from "@material-ui/core"
// import Banner from "./Banner"
// import SimpleSlider from "./SimpleSlider"

const Profile = () => {
    const user = useSelector((state) => state.user)
    const recipes = user?.recipes || []

    const favoriteRecipe = recipes.find((recipe) => recipe.user_recipe.favorite === true)

    return (
        <Container className='profile'>
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {user.firstName}'s Profile
                    </Typography>

                    <Typography>
                        {favoriteRecipe ? (
                            <Link></Link>
                        ) : (
                            <div>
                                <h4>No favorite recipe</h4>
                                <h4>Add a favorite</h4>
                            </div>
                        )}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Profile