import {connect} from "react-redux";
import {getExamples} from "../../redux/examples_reducer";
import React, {useEffect} from "react"
import Examples from "./Example/Examples";
// import {useEffect} from "react/cjs/react.production.min";

const ExamplesContainer = ({getExamples,examples}) => {
    useEffect( () => {
        getExamples();
    },[]); // якщо написати [examples], то скрипт буде бомбити сервер запитами "чи не змінились екзампли"

    return <Examples examples={examples.examplesList}/>;
}
/*

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
*/

let mapStateToProps = (state) => {
    // console.warn(state);
    return {
        examples: state.examples,
    }
}


export default connect(mapStateToProps, {getExamples})(ExamplesContainer)
