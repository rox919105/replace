import {combineReducers, createStore} from 'redux'
import authReducer from './authReducer';
import dialogsReduser from './dialogsReducer';
import profileReduser from './profileReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers ({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

