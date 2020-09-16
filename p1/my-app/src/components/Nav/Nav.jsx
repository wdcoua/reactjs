import React from 'react';
import c from './Nav.module.css'
import Menu from './Menu/Menu';
import {BrowserRouter} from "react-router-dom";

const Nav = (props) => {
    //debugger;
    return (

            <nav>
                <Menu text="Main" href="/index"/>
                <Menu text="Examples" href="/examples"/>
                <Menu text="Guest Book" href="/gb"/>
                <Menu text="Chat" href="/chat"/>
                <Menu text="bye" href="/out/13"/>
                <Menu text="..." href="/out/14"/>
            </nav>
    );

    /*
        return (<nav>
          <div className="menu"><a href="#">Гостьова</a></div>
          <div className="menu"><a href="#">Відгуки</a></div>
          <div className="menu"><a href="#">Замовити скрипт</a></div>
          <div className="menu"><a href="#">Контакти</a></div>
          <div className="menu"><a href="#">Фідбек</a></div>
          <div className="menu"><a href="#">Оплата</a></div>
          <div className="menu"><a href="#">Чат</a></div>
          <div className="menu"><a href="#">FreeWare</a></div>
          <div className="menu"><a href="#">Гостьова</a></div>
          <div className="menu"><a href="#">Гостьова</a></div>
          <div className="menu"><a href="#">Гостьова</a></div>
          <div className="menu"><a href="#">Гостьова</a></div>
        </nav>);
    */

}

export default Nav;