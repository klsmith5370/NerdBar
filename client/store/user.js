import axios from "axios"

// Action Type:
const SET_USER = "SET_USER"

// Action creator:
const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    }
}

// Thunk Creator:
export const fetchUser = (userId) => async (dispatch) => {
    const { data: user } = await axios.get(`/api/users/${userId}`)
    dispatch(setUser(user))
}

// Reducer:
export default function singleUserReducer(state = {}, action) {
    switch(action.type) {
        case SET_USER:
            return action.user
        default:
            return state
    }
}