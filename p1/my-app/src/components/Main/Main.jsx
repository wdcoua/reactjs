import React from 'react';
import c from './Main.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import Examples from "../Examples/Examples";
import GuestBook from "../GuestBook/GuestBook";
import {ExamplesData, PostsData} from "../../index";
import Chat from "../Chat/Chat";

const Main = (props) => {
    return (
            <div className={c.main}>
                {/*
                <Route component={Examples} path='/examples'/>
                <Route component={GuestBook} path='/gb'/>*/}



                <Route path='/examples' render={() => (
                    <Examples  examples={props.state.examples}
                    />
                )}/>
                <Route  path='/gb' render={() => (
                    <GuestBook
                               state={props.state}

                               dispatch={props.dispatch}

                               // addGBpost={props.addGBpost}
                               // gbNewPostChange={props.gbNewPostChange}
                               // getGBbranch={props.getGBbranch}
                               // getGBposts={props.getGBposts}
                               // getGBnewPostText={props.getGBnewPostText}
                    />
                )}/>
                <Route  path='/chat' render={() => (
                    <Chat chat={props.state.chat} dispatch={props.dispatch} />
                )}/>

            </div>
    );
}

export default Main;