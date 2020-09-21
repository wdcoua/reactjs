import React from 'react';
import Example from "./Example/Example";
import * as axios from "axios";


class ExamplesClass extends React.Component{


    apiKey = 'ada3692f-cdc4-4c82-9079-5847319d88fc'
    baseURL = 'https://wd.co.ua/api.php'


    componentDidMount = () => {

        const instance = axios.create({
            withCredentials: true,
            baseURL: this.baseURL,
            headers: {
                'API-KEY': this.apiKey
            }

        });

        instance
            .get('?action=get_examples')
            // .get('https://social-network.samuraijs.com/api/1.0/users/?count=20&page=250')
            .then(resp => {
                // debugger
                this.props.setExamples(resp.data.items)
                console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });

    }


    render(){
        return (
            <div>
                <h1>Приклади моїх робіт</h1>

                {this.props.examples.examplesList.map(e => <Example
                    key={e.id}
                    id={e.id}
                    link={ e.link}
                    title={e.title}
                    descr={e.descr}
                    date={e.date}
                />)}
            </div>
        );
    }
}
// const Examples = (props) => {
//
//
//
// }

export default ExamplesClass;