// import React from 'react';
import {connect} from "react-redux";
// import Examples from "./Examples";
// import {setGBPostsAC} from "../../redux/gb_reducer";
import {setExamplesAC} from "../../redux/examples_reducer";
// import ExamplesClass from "./ExamplesClass";
import React from "react";
import * as axios from "axios";
// import Example from "./Example/Example";
import Examples from "./Example/Examples";


class ExamplesContainer extends React.Component{


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
                // console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });

    }


    render(){
        return (

            <Examples examples={this.props.examples.examplesList}/>


        );
    }
}

let mapStateToProps = (state) => {
    // console.warn(state);
    return {
        examples: state.examples,
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        setExamples:(examples) => {
            // debugger
            dispatch(setExamplesAC(examples));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamplesContainer)
