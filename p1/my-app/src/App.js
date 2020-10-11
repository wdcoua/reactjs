import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <Main/>
                <Footer/>

            </div>
    );
}


export default App;
