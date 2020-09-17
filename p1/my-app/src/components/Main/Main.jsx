import React from 'react';
import c from './Main.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import Examples from "../Examples/Examples";
import GuestBook from "../GuestBook/GuestBook";
import {ExamplesData, PostsData} from "../../index";
import Chat from "../Chat/Chat";
import ChatContainer from "../Chat/ChatContainer";
import GuestBookContainer from "../GuestBook/GuestBookContainer";

const Main = (props) => {
    return (
            <div className={c.main}>
                {/*
                <Route component={Examples} path='/examples'/>
                <Route component={GuestBook} path='/gb'/>*/}



                <Route path='/examples' render={() => (
                    <Examples  examples={props.store.getState().examples}
                    />
                )}/>
                <Route  path='/gb' render={() => (
                    <GuestBookContainer
                               // state={props.state}
                               // dispatch={props.dispatch}
                                store={props.store}
                               // addGBpost={props.addGBpost}
                               // gbNewPostChange={props.gbNewPostChange}
                               // getGBbranch={props.getGBbranch}
                               // getGBposts={props.getGBposts}
                               // getGBnewPostText={props.getGBnewPostText}
                    />
                )}/>
                <Route  path='/chat' render={() => (
                    <ChatContainer
                        store={props.store}
                    />
                    // <Chat
                    //     // chat={props.state.chat}
                    //     // dispatch={props.dispatch}
                    //
                    // />
                )}/>

            </div>
    );
}

export default Main;