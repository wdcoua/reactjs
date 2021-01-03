import React from 'react';
import Header from "./Header";
import {checkAuthorization, logOut, setUserAuthData, setUserAuthImg} from "../../redux/auth_reducer";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
    return <Header {...props} />
}
/*
class HeaderContainer2 extends React.Component{
    render(){
        return <Header {...this.props} />
    }
}*/

const mapStateToProps = ({auth}) => {
    return {
        auth: auth
    }
};

export default connect(mapStateToProps,{setUserAuthData,setUserAuthImg,checkAuthorization, logOut})(HeaderContainer);