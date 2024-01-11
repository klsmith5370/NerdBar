import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import recipesReducer from './recipes'
import singleRecipeReducer from './recipe'
import singleUserReducer from './user'
import userRecipes from './userRecipes'
import userRecipe from './userRecipe'


const reducer = combineReducers({ 
  auth, 
  recipes: recipesReducer,
  recipe: singleRecipeReducer,
  user: singleUserReducer,
  userRecipes: userRecipes,
  userRecipe: userRecipe,

})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
