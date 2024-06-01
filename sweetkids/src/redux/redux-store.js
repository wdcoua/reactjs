import {applyMiddleware, combineReducers, createStore,compose} from "redux";
import thunkMiddleware from "redux-thunk"
import app_reducer from "./app_reducer";
import admin_reducer from "./admin_reducer";
import index_reducer from "./index_reducer.ts";
import auth_reducer from "./auth_reducer";
import {reducer as formReducer} from "redux-form";
import cart_reducer from "./cart_reducer";
import item_reducer from "./item_reducer";
import order_reducer from "./order_reducer";
import settings_reducer from "./settings_reducer";
import search_reducer from "./search_reducer";
import user_reducer from "./user_reducer";
import theme_reducer from "./theme_reducer";

let reducers = combineReducers({

     auth: auth_reducer,
     admin: admin_reducer,
     index: index_reducer,
     item: item_reducer,
     app: app_reducer,
     form: formReducer,
     cart: cart_reducer,
     order: order_reducer,
     settings: settings_reducer,
     search: search_reducer,
     user: user_reducer,
     theme: theme_reducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


window.__store__ = store;

export default store;