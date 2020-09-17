import React from 'react';
import Example from "./Example/Example";
import StoreContext from "../../StoreContext";

const Examples = () => {


    return (

        <StoreContext.Consumer>
            {
                (store) => {

                    const examples = store.getState().examples.map(e => <Example url={"/out/"+e.id} descr={e.name}/>);

                    return <div>
                        <h1>Приклади моїх робіт</h1>

                        {examples}
                    </div>
                }
            }
        </StoreContext.Consumer>

    );
}

export default Examples;