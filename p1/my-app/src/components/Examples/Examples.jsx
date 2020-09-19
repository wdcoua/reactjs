import React from 'react';
import Example from "./Example/Example";

const Examples = (props) => {

    return (
        <div>
            <h1>Приклади моїх робіт</h1>

            {props.examples.map(e => <Example url={"/out/" + e.id} descr={e.name}/>)}
        </div>
    );

}

export default Examples;