import React from 'react';
import c from './Main.module.css';
import Example from '../Example/Example';

const Main = () => {
  return (
    <div className={c.main}>
      <h1>Приклади моїх робіт</h1>
      <Example url="/out/17" descr="Хрестики-нолики"/>
      <Example url="/out/17" descr="Хрестики-нолики"/>
      <Example url="/out/17" descr="Хрестики-нолики"/>
      <Example url="/out/17" descr="Хрестики-нолики"/>
      <Example url="/out/17" descr="Хрестики-нолики"/>

    </div>
  );
}

export default Main;