import React, {useEffect} from "react";
import AdminMenu from "../AdminMenu/AdminMenu";
import AdminMain from "../AdminMain/AdminMain";
import c from "./Admin.module.css";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {checkAuthorization} from "../../redux/auth_reducer";

const Admin = (props) => {

    useEffect(() => {
        props.checkAuthorization()
    },[])

     if( props.auth.al < 7){
         return <Redirect to='/index'/>
     }else{
         return <div>
             <div className={c.main_header}>
                 <h1>Адмінка</h1>
             </div>
             <div className={c.main_container}>

                 {props.match.params.apage && <AdminMenu/>}

                 <AdminMain a_page={props.match.params.apage} a_id={props.match.params.id}/>


             </div>
         </div>
    }



}

const mstp = (state) => {
    return {
        auth: state.auth
    }
}


export default compose(connect(mstp,{checkAuthorization}))(Admin);