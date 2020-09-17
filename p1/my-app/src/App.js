import React from 'react';
import './App.css';
import Logo from './Logo';
import Menu from './menu';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";
//import  {addGBpost} from "./redux/state";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <Main
                    store={props.store}
                      // state={props.state}
                      // dispatch={props.dispatch}
                      // gbNewPostChange={props.gbNewPostChange}
                      // getGBbranch={props.getGBbranch}
                      // getGBposts={props.getGBposts}
                      // getGBnewPostText={props.getGBnewPostText}
                      // getExamples={props.getExamples}
                      // getChatPosts={props.getChatPosts}
                />
                <Footer/>

            </div>
    );
}


export default App;
