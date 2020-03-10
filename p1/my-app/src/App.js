import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import Menu from './menu';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
      

    </div>
  );
}


export default App;
