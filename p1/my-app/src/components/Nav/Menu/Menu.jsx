import React from 'react';
import c from './Menu.module.css'
import { NavLink} from "react-router-dom";

const Menu = ({href,text}) => {

    return (

            <div className={c.menu}><NavLink to={href} activeClassName={c.active}>{text}</NavLink></div>
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
        </nav>
        );
    */

}

export default Menu;