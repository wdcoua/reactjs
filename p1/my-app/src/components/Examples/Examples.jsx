import React from 'react';
import c from './Examples.module.css';
import Example from "./Example/Example";
import Main from "../Main/Main";

const Examples = (props) => {


    const examples = props.examples.map(e => <Example url={"/out/"+e.id} descr={e.name}/>);

    return (

        <div>
            <h1>Приклади моїх робіт</h1>

            {examples}
        </div>
    );
}

export default Examples;