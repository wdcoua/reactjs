import React, {useEffect} from "react";
import c from "./AdminListItem.module.css";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
// import AdminLinks from "../AdminLinks/AdminLinks";
// import {getCatList} from "../../redux/admin_reducer";
// import {connect} from "react-redux";
// import {compose} from "redux";

const AdminListItem = (props) => {

    const delItem = (test) => {
        let t = test.target
        console.log(t.getAttribute('del_id'));
        // window.location.href = '/#/adminko/admin_del_cat/'+t.getAttribute('del_id')
        props.history.push('/adminko/admin_del_item/'+t.getAttribute('del_id'))
    }
    const editItem = (test) => {
        let t = test.target
        console.log(t.getAttribute('edit_id'));
        props.history.push('/adminko/admin_edit_item/'+t.getAttribute('edit_id'))
    }

    return (
        <div className={c.main_body}>
            <span className={c.id}>{props.item.id}</span>
            <span className={props.item.active === '1' ? c.name : c.name_off} onClick={editItem} edit_id={props.item.id} title={props.item.descr}>{props.item.name}</span>
            {/*<span className={c.descr}>{props.item.descr}</span>*/}
            <span className={c.edit_del}>
                <span className={c.edit} onClick={editItem} edit_id={props.item.id}>[e]</span>&nbsp;
                <span className={c.del} onClick={delItem} del_id={props.item.id}>[x]</span>
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

export default compose(withRouter)(AdminListItem)
// compose(
//     connect(mapStateToProps,{getCatList})
//     // connect(mapStateToProps,null)
// )();