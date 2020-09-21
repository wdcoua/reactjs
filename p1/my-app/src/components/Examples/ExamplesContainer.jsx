// import React from 'react';
import {connect} from "react-redux";
// import Examples from "./Examples";
// import {setGBPostsAC} from "../../redux/gb_reducer";
import {setExamplesAC} from "../../redux/examples_reducer";
import ExamplesClass from "./ExamplesClass";

let mapStateToProps = (state) => {
    console.warn(state);
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

const ExamplesContainer = connect(mapStateToProps, mapDispatchToProps)(ExamplesClass)

export default ExamplesContainer;