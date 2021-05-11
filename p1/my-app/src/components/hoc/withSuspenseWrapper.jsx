import React,{Suspense} from "react";
// import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";

export const withSuspenseWrapper = (Component) => {
    /*const SuspenseWrapper = (props) => {
        return  <Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </Suspense>;
    }
    return connect()(SuspenseWrapper)
*/


    return (props) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </Suspense>;
    }
}
