import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider}  from "react-redux";
import SamuraiJsApp from "./App";

/*
setInterval(() => {
    store.dispatch({type:"FAKE"})
}, 1000)
*/

    ReactDOM.render(
        <SamuraiJsApp />, document.getElementById('root')
    );



serviceWorker.unregister();
