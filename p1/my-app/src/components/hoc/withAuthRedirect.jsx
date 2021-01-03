import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = ({auth}) => {
    return {
        isAuth: auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        if(!props.isAuth) return <Redirect to={'/login'}/>;
        return <Component {...props} />;
    }
    /*
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props} />;
        }
    }*/

    return connect(mapStateToProps)(RedirectComponent)
}
