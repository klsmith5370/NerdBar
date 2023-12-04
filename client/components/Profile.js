import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Container, Card, CardContent, Typography, Button } from "@material-ui/core"
import ProfileSlider from "./Slider"
import Banner from "./Banner"


const Profile = () => {
    const user = useSelector((state) => state.user)
    const recipes = user?.recipes || []

    // if (!user) {
    //     return (
    //         <Container className='profile'>
    //             <Card>
    //                 <CardContent>
    //                     <Typography variant="h4" gutterBottom>
    //                         Loading...
    //                     </Typography>
    //                 </CardContent>
    //             </Card>
    //         </Container>
    //     );
    // }

    const favoriteRecipes = recipes.find((recipe) => recipe.user_recipe.favorite === true)

    return (
        <Container className='profile'>
            <Banner />
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {user.username}
                    </Typography>

                    <Typography className='featured'>
                        {favoriteRecipes ? (
                            <Link></Link>
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