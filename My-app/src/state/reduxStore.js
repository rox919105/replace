import {combineReducers, createStore} from 'redux'
import dialogsReduser from './dialogsReducer';
import profileReduser from './profileReducer';

let reducers = combineReducers ({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
});

let store = createStore(reducers);

export default store;