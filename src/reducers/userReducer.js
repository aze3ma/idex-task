import { GET_USER_PROFILE } from '../constants'

const initialState = {}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return { ...action.payload }
    default:
      return state
  }
}

export default userReducer
