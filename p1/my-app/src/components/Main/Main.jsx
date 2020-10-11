import React from 'react';
import c from './Main.module.css';
import { Route} from "react-router-dom";
import ChatContainer from "../Chat/ChatContainer";
import GuestBookContainer from "../GuestBook/GuestBookContainer";
import ExamplesContainer from "../Examples/ExamplesContainer";
// import Users from "../Users/Users";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";

const Main = () => {
    return (
            <div className={c.main}>

                <Route path='/examples' render={() => (
                            <ExamplesContainer/>
                )}/>
                <Route  path='/gb' render={() => (
                            <GuestBookContainer/>


                )}/>
                <Route  path='/chat' render={() => (
                            <ChatContainer />
                )}/>
                <Route  path='/users' render={() => (
                            <UsersContainer />
                )}/>
                <Route  path='/profile/:userID?' render={() => (
                            <ProfileContainer />
                )}/>

            </div>
    );
}

export default Main;