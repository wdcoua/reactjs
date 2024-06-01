import React, {useEffect, Suspense, useState} from "react";
import logo from './logo.svg';
import {BrowserRouter, HashRouter, withRouter} from "react-router-dom";
import store from "./redux/redux-store";
// import {Provider} from "./StoreContext";
import Header2 from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer2 from "./components/Footer/Footer";
import {compose} from "redux";
import {connect,Provider} from "react-redux";
import Preloader from "./components/Preloader/Preloader";
import {initializeApp, setInitialized} from "./redux/app_reducer";
import {Layout} from "antd";




import 'antd/dist/antd.css';
import './App.css';
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./components/Theme/GlobalStyles";
import {darkTheme, lightTheme} from "./components/Theme/Theme";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
const { Header, Footer, Sider, Content } = Layout;

const App = (props) => {


    // const [theme, setTheme] = useState('light');
    //
    // const themeToggler = () => {
    //
    //     theme === 'light' ? setTheme('dark') : setTheme('light')
    //
    // }

    useEffect(()=>{
        props.initializeApp()
    })

    return !props.initialized ? <Preloader comment='loading 1'/> :



        <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>

            <>
                <GlobalStyles/>
                {(props.no_inet ? <>No connection to server! <br/> Please check your Internet connection and try to reload this page</> :
                <Layout>
                    <Header><Header2/>
                        {/*<button onClick={themeToggler}>Switch Theme</button>*/}
                    </Header>
                    <Layout>
                        {/*<Sider>Sider</Sider>*/}
                        {/*<Content>Content</Content>*/}
                        <Main/>
                    </Layout>
                    <Footer><Footer2/></Footer>
                </Layout>
                )}
                </>
        </ThemeProvider>






}
const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        no_inet: state.app.no_inet,
        theme: state.theme.theme
    }
}
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{initializeApp})
)(App)

const SweetKids = () => {


    return <BrowserRouter>
        <Provider store={store}>
            <Suspense fallback={(<Preloader  comment='loading 2'/>)}>
                <AppContainer />
            </Suspense>
        </Provider>
    </BrowserRouter>
    // return <HashRouter>
    //     <Provider store={store}>
    //         <AppContainer/>
    //     </Provider>
    // </HashRouter>
}


export default SweetKids

