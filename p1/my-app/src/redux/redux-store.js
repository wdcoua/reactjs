import {applyMiddleware, combineReducers, createStore} from "redux";
import gb_reducer from "./gb_reducer";
import chat_reducer from "./chat_reducer";
import examples_reducer from "./examples_reducer";
import users_reducer from "./users_reducer";
import profile_reducer from "./profile_reducer";
import auth_reducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk"
//import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as formReducer} from "redux-form";
import app_reducer from "./app_reducer";

let reducers = combineReducers({
    gb: gb_reducer,
    chat: chat_reducer,
    examples: examples_reducer,
    users: users_reducer,
    profilePage: profile_reducer,
    auth: auth_reducer,
    form: formReducer,
    app: app_reducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
//let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;