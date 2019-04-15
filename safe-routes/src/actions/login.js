import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START, payload: creds})

  return axios
    .post('https://saferoutes-4-12.herokuapp.com/api/auth/login', creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err})
    })
}
