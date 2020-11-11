import {combineReducers, createStore} from 'redux'
import dialogsReduser from './dialogsReducer';
import profileReduser from './profileReducer';
import userReducer from './usersReducer';

let reducers = combineReducers ({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: userReducer,
});

let store = createStore(reducers);

export default store;