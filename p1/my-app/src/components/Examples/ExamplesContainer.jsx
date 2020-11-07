import {connect} from "react-redux";
import {getExamples} from "../../redux/examples_reducer";
import React from "react";
import Examples from "./Example/Examples";

class ExamplesContainer extends React.Component{

    componentDidMount = () => {
        this.props.getExamples();
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


export default connect(mapStateToProps, {getExamples})(ExamplesContainer)
