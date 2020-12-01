import {applyMiddleware, combineReducers, createStore} from 'redux'
import authReducer from './authReducer';
import dialogsReduser from './dialogsReducer';
import profileReduser from './profileReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers ({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

