import {combineReducers, createStore} from "redux";
import gb_reducer from "./gb_reducer";
import chat_reducer from "./chat_reducer";
import examples_reducer from "./examples_reducer";
import users_reducer from "./users_reducer";

let reducers = combineReducers({
    gb: gb_reducer,
    chat: chat_reducer,
    examples: examples_reducer,
    users: users_reducer
})

let store = createStore(reducers);

export default store;