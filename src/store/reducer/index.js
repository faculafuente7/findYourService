import { SEARCH_SERVICES, RECEIVE_USER, LOGOUT_USER } from '../constants'

const initialState = {
    services: [],
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_SERVICES:
            return Object.assign({}, state, { services: action.payload });
        case RECEIVE_USER:
            return Object.assign({}, state, { user: action.payload });
        case LOGOUT_USER:
            return Object.assign({}, state, {user: action.payload});
        default:
            return state;
    }
}