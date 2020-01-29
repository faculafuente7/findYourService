import { RECEIVE_USER, LOGOUT_USER } from '../constants'
import axios from "axios";

export const fetchUser = (user) => ({
    type: RECEIVE_USER,
    payload: user
});

export const getUser = () => dispatch => {
    axios
        .get('/api/auth/me')
        .then(res => {
            return res.data
        })
        .then(user => {
            return dispatch(fetchUser(user));
        });
}

export const logoutUser = () => ({
    type: LOGOUT_USER,
    payload: {},
})

