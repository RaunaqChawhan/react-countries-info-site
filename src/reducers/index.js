import {  combineReducers } from "redux";

const countryReducer  = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return {
                ...state
            };
        case 'RECEIVED_ALL':
            console.log(action.allCountries);
            return {
                ...state,
                countries: action.allCountries,
                regions: action.regions
            }
        default:
            return state;
    }
}

const searchCriteriaReducer = (state = {category: 'ALL'}, action) => {
    switch(action.type) {
        case 'SET_CATEGORY':
            console.log('in category');
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    countryReducer,
    searchCriteriaReducer
})