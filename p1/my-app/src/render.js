import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addGBpost, gbNewPostChange} from "./redux/state";

export let rerenderer = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}  />
        </BrowserRouter>, document.getElementById('root')
    );
}