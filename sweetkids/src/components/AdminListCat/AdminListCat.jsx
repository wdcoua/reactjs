import React, {useEffect} from "react";
import c from "./AdminListCat.module.css";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
// import AdminLinks from "../AdminLinks/AdminLinks";
// import {getCatList} from "../../redux/admin_reducer";
// import {connect} from "react-redux";
// import {compose} from "redux";

const AdminListCat = (props) => {

    const delCat = (test) => {
        let t = test.target
        console.log(t.getAttribute('del_id'));
        // window.location.href = '/#/adminko/admin_del_cat/'+t.getAttribute('del_id')
        props.history.push('/adminko/admin_del_cat/'+t.getAttribute('del_id'))
    }
    const editCat = (test) => {
        let t = test.target
        console.log(t.getAttribute('edit_id'));
        props.history.push('/adminko/admin_edit_cat/'+t.getAttribute('edit_id'))
    }

    return (
        <div className={c.main_body}>
            <span className={c.id}>{props.cat.id}</span>
            <span className={props.cat.active === '1' ? c.name : c.name_off} onClick={editCat} edit_id={props.cat.id}>{props.cat.name}</span>
            <span className={c.descr}>{props.cat.descr}</span>
            <span className={c.edit_del}>
                <span className={c.edit} onClick={editCat} edit_id={props.cat.id}>[e]</span>&nbsp;
                <span className={c.del} onClick={delCat} del_id={props.cat.id}>[x]</span>
            </span>
        </div>
    )
}
//
// const mapStateToProps = (state) => {
//     return{
//         catList: state.admin.catList
//     }
// }

export default compose(withRouter)(AdminListCat)
// compose(
//     connect(mapStateToProps,{getCatList})
//     // connect(mapStateToProps,null)
// )();