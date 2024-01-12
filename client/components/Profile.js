import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Container, Card, CardContent, Typography, Button } from "@material-ui/core"
import ProfileSlider from "./Slider"
import Banner from "./Banner"
import { fetchFavoriteRecipes } from "../store/userRecipes"
import { fetchFavoriteRecipe } from "../store/userRecipe"

const Profile = () => {
    const user = useSelector((state) => state.user)
    const recipes = user?.recipes || []
    const dispatch = useDispatch()

    const favoriteRecipes = recipes.filter(
        (recipe) => recipe.user_recipe.favorite === true
    )[0];

    // const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        dispatch(fetchFavoriteRecipes())
    }, [])


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
                    <Typography>
                        {favoriteRecipes ? (
                            <ProfileSlider />
                        ) : (
                            <div>
                                <Button>Add a favorite</Button>
                                <Typography>
                                    <h2>Favorite Recipes</h2>
                                    <ProfileSlider />
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

