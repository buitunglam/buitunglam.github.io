import {combineReducers} from "redux";
import arrWordsReducer from './arrWordsReducer';
import filterStatusReducer from './filterStatusReducer';
import isAddingReducer from './isAddingReducer';


const reducer = combineReducers({
    arrWord: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer
});

export default reducer;