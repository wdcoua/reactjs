import React, {useEffect} from "react";
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {BrowserRouter, withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/Preloader/Preloader";
import store from "./redux/redux-store";



const App = ({initializeApp,initialized}) => {
    useEffect(() => {
        initializeApp();

    },[initialized]);

    return !initialized
        ? <Preloader />
        : <div className="app-wrapper">
            <HeaderContainer/>
            <Nav/>
            <Main/>
            <Footer/>

        </div>
}
/*

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
*/

const mapStateToProps = ({app}) => {
    // debugger
    return {
        initialized: app.initialized
    }
};



const AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);


const SamuraiJsApp = () => {



    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}


export default SamuraiJsApp
