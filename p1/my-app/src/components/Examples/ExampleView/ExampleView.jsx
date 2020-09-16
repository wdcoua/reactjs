import React from 'react';
import c from './Example.module.css';

const ExampleView = (props) => {
  return (
      <div className={c.example}>
        <a href={props.url}>{props.descr}</a>
      </div>
  );
}

export default ExampleView;