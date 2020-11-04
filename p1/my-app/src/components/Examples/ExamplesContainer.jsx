// import React from 'react';
import {connect} from "react-redux";
// import Examples from "./Examples";
// import {setGBPostsAC} from "../../redux/gb_reducer";
import {setExamplesAC} from "../../redux/examples_reducer";
// import ExamplesClass from "./ExamplesClass";
import React from "react";
// import Example from "./Example/Example";
import Examples from "./Example/Examples";
import {API} from "../../api/api";


class ExamplesContainer extends React.Component{




    componentDidMount = () => {



        API.getExamples()
            // .get('https://social-network.samuraijs.com/api/1.0/users/?count=20&page=250')
            .then(data => {
                // debugger
                this.props.setExamples(data.items)
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
