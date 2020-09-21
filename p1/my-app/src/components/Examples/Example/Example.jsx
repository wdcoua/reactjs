import React from 'react';
import c from './Example.module.css';

const Example = (props) => {
  return (
      <div className={c.example}>
        <a href={props.link} title={props.descr}>{props.title}</a>
      </div>
  );
}

export default Example;

