import { SEARCH_SERVICES } from '../constants'

const initialState = {
    services: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_SERVICES:
            return Object.assign({}, state, { services: action.payload });
        default:
            return state;
    }
}