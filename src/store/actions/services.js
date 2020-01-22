import axios from 'axios';
import { SEARCH_SERVICES} from '../constants'

const searchServicesAction = payload => {
    return {type: SEARCH_SERVICES, payload}
}

export const searchServices = inputValue => dispatch => {
    axios
        .get(`/api/services/${inputValue}`)
        .then(res => res.data) 
        .then(services => {
            console.log(services)
            return dispatch(searchServicesAction(services));
        });
};