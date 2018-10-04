import React from 'react';
import {createStore} from "redux";
import reducer from './Reducer/reducer';
// default state



//reducer -> tiên đoán action

// const reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'FILTER_SHOW_ALL':
//             return {...state, filterStatus: 'SHOW_ALL'};
//         case 'FILTER_MEMORIZED':
//             return {...state, filterStatus: 'MEMORIZED'};
//         case 'FILTER_NEED_PRACTICE':
//             return {...state, filterStatus: 'NEED_PRACTICE'};
//         case 'TOGGLE_MEMORIZED':
//             return{
//                 ...state,
//                 arrWord: state.arrWord.map(e => {
//                     if (e.id !== action.id) return e;
//                     return {...e, memorized : !e.memorized };
//                 })
//             };
//         case 'TOGGLE_SHOW':
//             return {
//                 ...state,
//                 arrWord: state.arrWord.map(e => {
//                     if (e.id !== action.id) return e;
//                     return {...e, isShow: !e.isShow};
//                 })
//             };
//         case 'TOGGLE_ADDING':
//             return {
//                 ...state,
//                 isAdding: !state.isAdding
//             };
//         case 'ADD_WORD':
//             return {
//                 ...state,
//                 arrWord:[{
//                     id: state.arrWord.length + 1,
//                     en: action.en,
//                     vn: action.vn,
//                     memorized: false,
//                     isShow: false,
//                 }].concat(state.arrWord)
//             };
//         default:
//             break;
//     }
//     return state;
// };

// Tách reducer



// Combine reducer



// tạo ra store

const store = createStore(reducer);

export default store;
