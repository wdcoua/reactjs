import React from "react";
import c from "./AdminMain.module.css";
import AdminLinks from "../AdminLinks/AdminLinks";
import AdminCatList from "../AdminCatList/AdminCatList";
import AdminAddCat from "../AdminAddCat/AdminAddCat";
import AdminItemList from "../AdminItemList/AdminItemList";
import AdminAddItem from "../AdminAddItem/AdminAddItem";
import AdminUsersList from "../AdminUsersList/AdminUsersList";
import AdminDelCat from "../AdminDelCat/AdminDelCat";
import AdminEditCat from "../AdminEditCat/AdminEditCat";
import AdminEditItem from "../AdminEditItem/AdminEditItem";
import AdminDelItem from "../AdminDelItem/AdminDelItem";
import AdminSettings from "../AdminSettings/AdminSettings";
import AdminOrders from "../AdminOrders/AdminOrders";
import AdminViewOrder from "../AdminViewOrder/AdminViewOrder";

const AdminMain = (props) => {
    let a_page = props.a_page;
    return (
        <div className={!a_page ? c.main_body_wide : c.main_body}>

            {!a_page && <AdminLinks/>}
            {a_page === 'admin_cat_list' && <AdminCatList/>}
            {a_page === 'admin_add_cat' && <AdminAddCat/>}
            {a_page === 'admin_item_list' && <AdminItemList a_id={props.a_id}/>}
            {a_page === 'admin_add_item' && <AdminAddItem/>}
            {a_page === 'admin_users_list' && <AdminUsersList/>}
            {a_page === 'admin_del_cat' && <AdminDelCat a_id={props.a_id}/>}
            {a_page === 'admin_edit_cat' && <AdminEditCat a_id={props.a_id}/>}
            {a_page === 'admin_del_item' && <AdminDelItem a_id={props.a_id}/>}
            {a_page === 'admin_edit_item' && <AdminEditItem a_id={props.a_id}/>}
            {a_page === 'admin_orders' && <AdminOrders/>}
            {a_page === 'admin_view_order' && <AdminViewOrder a_id={props.a_id}/>}
            {a_page === 'admin_settings' && <AdminSettings a_id={props.a_id}/>}
        </div>
    )
}

export default AdminMain;