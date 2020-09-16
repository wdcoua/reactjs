




import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

// let state = store.getState();

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}
                 // addGBpost={store.addGBpost.bind(store)}
                 // gbNewPostChange={store.gbNewPostChange.bind(store)}
                 // getGBbranch={store.getGBbranch.bind(store)}
                 // getGBposts={store.getGBposts.bind(store)}
                 // getGBnewPostText={store.getGBnewPostText.bind(store)}
                 // getExamples={store.getExamples.bind(store)}
                 // getChatPosts={store.getChatPosts.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}
//
// store.assign_renderer(() => {
//
//     ReactDOM.render(
//         <BrowserRouter>
//             <App all={store}  />
//         </BrowserRouter>, document.getElementById('root')
//     );
// })
/*
let rerenderer = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App all={store}  />
        </BrowserRouter>, document.getElementById('root')
    );
}
*/

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})

//store.assign_renderer(rerenderEntireTree);

// store.assign_renderer(state);
//
// store.pass_renderer(store.assign_renderer);
//ReactDOM.render(<Test />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**********/
// wd@wd-nout:/media/wd/1c65ded6-8343-4eea-b5cb-6cb824d7acab/wd/wd5/webdev/react/p1/my-app$
// npm start