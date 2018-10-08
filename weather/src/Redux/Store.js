import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"


const defaultState = {
    cityName: null,
    temp: null,
    isLoading:false,
    error: false,
};

const reducer = (state = defaultState,action) => {
        switch (action.type) {
            case 'START_FETCH':
                return {...state,  isLoading: true};
            case 'FETCH_SUCCESS':
                return {cityName: action.cityName,temp: action.temp,isLoading:false, error:false};
            case 'FETCH_ERROR':
                return {cityName: null,temp: null,isLoading:false, error:true};
            default:
                return state;
        }
};

const store = createStore(reducer,applyMiddleware(thunk));

export default store;