import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import ErrorsShower from "../ErrorsShower/ErrorsShower";
import {settingMainError} from "../../redux/app_reducer";

let mapStateToProps = ({app}) => {
    return {
        mainError: app.mainError
    }
}

export const withErrorsShowerWrapper = (Component) => {

    const ErrorsShowerWrapper = (props) => {
        // if(!props.isAuth) return <Redirect to={'/login'}/>;
        return <div>
            <Component {...props} />
            <ErrorsShower mainError={props.mainError} settingMainError={props.settingMainError}/>
        </div>;
    }
    /*
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props} />;
        }
    }*/

    return connect(mapStateToProps)(ErrorsShowerWrapper)
}
