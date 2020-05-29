import { GET_USER_PROFILE } from '../constants'

export const getUserProfile = () => async (dispatch) => {
  const response = await fetch('/profile.json')
  const userProfile = await response.json()
  dispatch({ type: GET_USER_PROFILE, payload: userProfile })
}
