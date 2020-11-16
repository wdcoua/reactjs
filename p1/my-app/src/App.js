import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {

        this.props.initializeApp();

    }

    render() {

        return !this.props.initialized
            ? <Preloader />
            : <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <Main/>
                <Footer/>

            </div>
    }
}

const mapStateToProps = (props) => {
    // debugger
    return {
        initialized: props.app.initialized
    }
};



export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);
