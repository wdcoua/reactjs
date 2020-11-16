import React from 'react';
import Header from "./Header";
import {checkAuthorization, logOut, setUserAuthData, setUserAuthImg} from "../../redux/auth_reducer";
import {connect} from "react-redux";
//import {API} from "../../api/api";

class HeaderContainer extends React.Component{

    // apiKey = 'ada3692f-cdc4-4c82-9079-5847319d88fc'
    // // baseURL = 'https://wd.co.ua/api.php'
    // baseURL = 'https://social-network.samuraijs.com/api/1.0/'
    // // currPage = 4
    // instance = axios.create({
    //     withCredentials: true,
    //     baseURL: this.baseURL,
    //     headers: {
    //         'API-KEY': this.apiKey
    //     }
    //
    // });

    componentDidMount() {

        this.props.checkAuthorization();

    }

    render(){
        return <Header {...this.props} />
    }
}

const mapStateToProps = (props) => {
    // debugger
    return {
        auth: props.auth
    }
};

export default connect(mapStateToProps,{setUserAuthData,setUserAuthImg,checkAuthorization, logOut})(HeaderContainer);