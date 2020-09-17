import React from 'react';
import c from './Main.module.css';
import { Route} from "react-router-dom";
import Examples from "../Examples/Examples";
import ChatContainer from "../Chat/ChatContainer";
import GuestBookContainer from "../GuestBook/GuestBookContainer";

const Main = () => {
    return (
            <div className={c.main}>

                <Route path='/examples' render={() => (
                            <Examples/>
                )}/>
                <Route  path='/gb' render={() => (
                            <GuestBookContainer/>


                )}/>
                <Route  path='/chat' render={() => (
                            <ChatContainer/>
                )}/>

            </div>
    );
}

export default Main;