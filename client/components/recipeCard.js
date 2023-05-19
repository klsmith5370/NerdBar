import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Grid, Card, CardContent, CardMedia, CardHeader, Typography, CardActionArea, CardActions, IconButton, Collapse } from '@material-ui/core'
import { ExpandMoreIcon, MoreVertIcon } from '@material-ui/core'
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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container className='recipe-cards'>
            <Grid container spacing={2}>
                {recipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={6} lg={6} key={recipe.id}>
                        <Card sx={{ maxWidth: 345 }}>
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
                                        {recipe.recipeName}
                                    </Typography>

                                    <Typography>
                                        {recipe.recipeDescription}
                                    </Typography>

                                </CardContent>

                                <CardActions disableSpacing>
                                    <ExpandMore 
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label='show more'
                                    >
                                        <BsChevronDown />
                                    </ExpandMore>
                                </CardActions>

                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default RecipeCard
