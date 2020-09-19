// import React from 'react';
import {connect} from "react-redux";
import Examples from "./Examples";

let mapStateToProps = (state) => {
    return {
        examples: state.examples,
    }
}
let mapDispatchToProps = () => {

    return {}
}

const ExamplesContainer = connect(mapStateToProps, mapDispatchToProps)(Examples)

export default ExamplesContainer;