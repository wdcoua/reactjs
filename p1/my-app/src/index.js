import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "./StoreContext";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>

        </BrowserRouter>, document.getElementById('root')
    );
}


rerenderEntireTree();

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})

serviceWorker.unregister();

/**********/
// wd@wd-nout:/media/wd/1c65ded6-8343-4eea-b5cb-6cb824d7acab/wd/wd5/webdev/react/p1/my-app$
// npm start

// карта-схема
// https://app.lucidchart.com/documents/edit/eeddadd9-a7cb-444a-8750-5b07377a1d66/0_0?beaconFlowId=25B49DD164AED936#?folder_id=home&browser=icon