import axios from 'axios';

export const CHANGE_USER_START = 'CHANGE_USER_START';
export const CHANGE_USER_SUCCESS = 'CHANGE_USER_SUCCESS';
export const CHANGE_USER_FAIL = 'CHANGE_USER_FAIL';

export const updateUser = (id, info) => dispatch => {
  dispatch({ type: CHANGE_USER_START });
  return axios
    .put(`https://saferoutes-4-12.herokuapp.com/api/user/${id}`, info)
    .then(res => {
      localStorage.setItem('username', info.newUsername);
      localStorage.setItem('greeting', `Welcome, ${info.newUsername}`);
      dispatch({ type: CHANGE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CHANGE_USER_FAIL });
    });
};
