import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Grid, Card, CardContent, CardMedia, CardHeader, Typography, CardActionArea, CardActions, IconButton, Collapse } from '@material-ui/core'
import { styled } from '@material-ui/core'
import { BsChevronDown } from 'react-icons/bs'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const RecipeCard = () => {
    const [expanded, setExpanded] = useState(false)
    const recipes = useSelector(state => state.recipes)


    const handleExpandClick = (recipeId) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [recipeId]: !prevExpanded[recipeId]
        }))
    }

    return (
        <Container className='recipe-cards'>
            <Grid container spacing={2}>
                {recipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={6} lg={6} key={recipe.id}>
                        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#CC76A1', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                            <CardActionArea>
                                <Link to={`/characterRecipes/${recipe.id}`}>
                                    <CardMedia 
                                        component='img'
                                        height='300'
                                        image={recipe.characterImage}
                                        alt='character image'
                                    />
                                </Link>

                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        {recipe.characterName}
                                    </Typography>

                                    <Typography gutterBottom variant='h6'>
                                        {recipe.recipeName}
                                    </Typography>

                                </CardContent>

                                <CardActions disableSpacing>
                                    <ExpandMore 
                                        expand={expanded[recipe.id]}
                                        onClick={() => handleExpandClick(recipe.id)}
                                        aria-expanded={expanded[recipe.id]}
                                        aria-label='show more'
                                    >
                                        <BsChevronDown />
                                    </ExpandMore>
                                </CardActions>

                                <Collapse in={expanded[recipe.id]} timeout='auto' unmountOnExit>
                                    <CardContent>
                                        <Typography>
                                            Ingredients:
                                        </Typography>

                                        <Typography>
                                            {recipe.recipeIngredients}
                                        </Typography>

                                    </CardContent>

                                    <CardContent>
                                        <Typography paragraph>
                                            Instructions:
                                        </Typography>

                                        <Typography>
                                            {recipe.recipeInstructions}
                                        </Typography>
                                    </CardContent>

                                </Collapse>

                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>

        // <Container className='recipe-cards'>
        //     <Grid container spacing={2}>
        //         <Grid item xs={12} sm={6} md={6} lg={6}>
        //             <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#CC76A1', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        //                 <CardActionArea>
        //                     <Link to={`/characterRecipes/${recipe.id}`}>
        //                         <CardMedia
        //                             component='img'
        //                             height='300'
        //                             image={recipe.characterImage}
        //                             alt='character image'
        //                         />
        //                     </Link>
        //                     <CardMedia
        //                             component='img'
        //                             height='300'
        //                             image={recipe.characterImage}
        //                             alt='character image'
        //                     />

        //                     <CardContent>
        //                         <Typography gutterBottom variant='h5' component='div'>
        //                             {recipe.characterName}
        //                         </Typography>

        //                         <Typography gutterBottom variant='h6'>
        //                             {recipe.recipeName}
        //                         </Typography>

        //                         <Typography>
        //                             {recipe.recipeDescription}
        //                         </Typography>

        //                     </CardContent>

        //                     <CardActions disableSpacing>
        //                         <ExpandMore
        //                             expand={expanded}
        //                             onClick={handleExpandClick}
        //                             aria-expanded={expanded}
        //                             aria-label='show more'
        //                         >
        //                             <BsChevronDown />
        //                         </ExpandMore>
        //                     </CardActions>

        //                     <Collapse in={expanded} timeout='auto' unmountOnExit>
        //                         <CardContent>
        //                             <Typography>
        //                                 Ingredients:
        //                             </Typography>

        //                             <Typography>
        //                                 {recipe.recipeIngredients}
        //                             </Typography>
        //                         </CardContent>

        //                         <CardContent>
        //                             <Typography paragraph>
        //                                 Instructions:
        //                             </Typography>

        //                             <Typography>
        //                                 {recipe.recipeInstructions}
        //                             </Typography>
        //                         </CardContent>
        //                     </Collapse>
        //                 </CardActionArea>
        //             </Card>
        //         </Grid>
        //     </Grid>
        // </Container>
    )
}

export default RecipeCard
