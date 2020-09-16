import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let rerenderer = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}  />
        </BrowserRouter>, document.getElementById('root')
    );
}