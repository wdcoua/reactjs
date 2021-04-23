import React, {useEffect} from "react";
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {BrowserRouter, HashRouter, withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/Preloader/Preloader";
import store from "./redux/redux-store";
import {getUsers, setPageWithMe} from "./redux/users_reducer";



const App = ({initializeApp,initialized,total,usersPerPage,getUsers,setPageWithMe}) => {
    useEffect(() => {

        // console.log('total - ' + total);
        // console.log('initialized - ' + initialized);
        if(total !== 0){
            let currentPage2 = Math.ceil((total - 6590) / usersPerPage);
            // console.log('currentPage - ' + currentPage2);
            // setPageWithMe(currentPage2)
            getUsers(usersPerPage,currentPage2);
        }else{
            initializeApp();
        }

    },[total]);

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

const mapStateToProps = (store) => {
    // debugger
    return {
        initialized: store.app.initialized,
        initial: store.users.initial,
        pageWithMe: store.users.pageWithMe,
        myId: store.users.myId,
        total: store.users.totalUsers,
        usersPerPage: store.users.usersPerPage,
        currentPage: store.users.currentPage,
    }
};



const AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{initializeApp,getUsers,setPageWithMe}))(App);


const SamuraiJsApp = () => {



    // return <BrowserRouter>
    //     <Provider store={store}>
    //         <AppContainer />
    //     </Provider>
    // </BrowserRouter>
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}


export default SamuraiJsApp
