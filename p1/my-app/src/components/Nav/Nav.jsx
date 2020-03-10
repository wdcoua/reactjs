import React from 'react';
import c from './Nav.module.css'
import Menu from './Menu/Menu';

const Nav = (props) => {
  //debugger;
  return (
    <nav>
      <Menu text="hello"/>
      <Menu text="aloha" />
      <Menu text="hi" />
      <Menu text="bye" />
      <Menu text="..." />
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