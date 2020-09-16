




import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import all_data from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let state = all_data.getState();

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={all_data.dispatch.bind(all_data)}
                 // addGBpost={all_data.addGBpost.bind(all_data)}
                 // gbNewPostChange={all_data.gbNewPostChange.bind(all_data)}
                 // getGBbranch={all_data.getGBbranch.bind(all_data)}
                 // getGBposts={all_data.getGBposts.bind(all_data)}
                 // getGBnewPostText={all_data.getGBnewPostText.bind(all_data)}
                 // getExamples={all_data.getExamples.bind(all_data)}
                 // getChatPosts={all_data.getChatPosts.bind(all_data)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}
//
// all_data.assign_renderer(() => {
//
//     ReactDOM.render(
//         <BrowserRouter>
//             <App all={all_data}  />
//         </BrowserRouter>, document.getElementById('root')
//     );
// })
/*
let rerenderer = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App all={all_data}  />
        </BrowserRouter>, document.getElementById('root')
    );
}
*/

rerenderEntireTree(all_data.getState());
all_data.assign_renderer(rerenderEntireTree);

// all_data.assign_renderer(state);
//
// all_data.pass_renderer(all_data.assign_renderer);
//ReactDOM.render(<Test />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**********/
// wd@wd-nout:/media/wd/1c65ded6-8343-4eea-b5cb-6cb824d7acab/wd/wd5/webdev/react/p1/my-app$
// npm start