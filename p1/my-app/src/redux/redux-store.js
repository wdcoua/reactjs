import {combineReducers, createStore} from "redux";
import gb_reducer from "./gb_reducer";
import chat_reducer from "./chat_reducer";
import examples_reducer from "./examples_reducer";
import users_reducer from "./users_reducer";
import profile_reducer from "./profile_reducer";
import auth_reducer from "./auth_reducer";

let reducers = combineReducers({
    gb: gb_reducer,
    chat: chat_reducer,
    examples: examples_reducer,
    users: users_reducer,
    profilePage: profile_reducer,
    auth: auth_reducer
})

let store = createStore(reducers);

window.store = store;

export default store;