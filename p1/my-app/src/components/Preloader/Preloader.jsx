import React from "react";
import {connect} from "react-redux";
import preloader from "../../images/rings.svg";

class Preloader extends React.Component{
    render(){
        return <div>
            <img src={preloader} alt={'loading...'} style={{width: 150+'px'}} />
        </div>
    }
}

export default connect()(Preloader)