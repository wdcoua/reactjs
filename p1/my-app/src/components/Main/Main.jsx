import React, {lazy} from 'react';
import c from './Main.module.css';
import { Route} from "react-router-dom";
// import ChatContainer from "../Chat/ChatContainer";
// import GuestBookContainer from "../GuestBook/GuestBookContainer";
import ExamplesContainer from "../Examples/ExamplesContainer";
// import Users from "../Users/Users";
// import UsersContainer from "../Users/UsersContainer";
// import ProfileContainer from "../Profile/ProfileContainer";
// import Login from "../Login/Login";
// import MyProfile from "../Profile/MyProfile";
import {withSuspenseWrapper} from "../hoc/withSuspenseWrapper";

// ленивая загрузка компонентов
const ChatContainer = lazy(() => import ('../Chat/ChatContainer'));
const GuestBookContainer = lazy(() => import ('../GuestBook/GuestBookContainer'));
const Login = lazy(() => import ('../Login/Login'));
const MyProfile = lazy(() => import ('../Profile/MyProfile'));
const ProfileContainer = lazy(() => import ('../Profile/ProfileContainer'));
const UsersContainer = lazy(() => import ('../Users/UsersContainer'));

const Main = () => {
    return (
            <div className={c.main}>

                <Route path='/examples' render={() => (
                            <ExamplesContainer/>
                )}/>
                <Route path='/index' render={() => (
                            <ExamplesContainer/>
                )}/>
                <Route  path='/gb' render={withSuspenseWrapper(GuestBookContainer)}/>
                <Route  path='/chat' render={withSuspenseWrapper(ChatContainer)}/>
                <Route  path='/users' render={withSuspenseWrapper(UsersContainer)}/>
                <Route  path='/profile/:userID?' render={withSuspenseWrapper(ProfileContainer)}/>
                <Route  path='/myprofile' render={withSuspenseWrapper(MyProfile)}/>
                <Route  path='/login' render={withSuspenseWrapper(Login)}/>
                <Route  path='/reg' render={withSuspenseWrapper(Login)}/>


            </div>
    );
}

export default Main;