import { RECEIVE_USER } from '../constants'
import axios from "axios";

export const fetchUser = (user) => ({
    type: RECEIVE_USER,
    payload: user
});