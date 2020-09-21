import React from 'react';
import c from './Example.module.css';

const Examples = (props) => {
  return (

      <div>
          <h1>Приклади моїх робіт</h1>

          {props.examples.map(e =>
              <div key={e.id} className={c.example}>
                  <a href={e.link} title={e.descr}>{e.title}</a>
              </div>

          // <Example
          //     key={e.id}
          //     id={e.id}
          //     link={ e.link}
          //     title={e.title}
          //     descr={e.descr}
          //     date={e.date}
          // />

          )}
      </div>


  );
}

export default Examples;

