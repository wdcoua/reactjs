import React from "react";
import c from "./AdminLinks.module.css";
import {NavLink} from "react-router-dom";

const AdminLinks = (props) => {

    return (
        <div >
            <NavLink to='/adminko/admin_cat_list'>список категорій</NavLink><br/>
            <NavLink className={c.green} to='/adminko/admin_add_cat'>додати категорію</NavLink><br/>
            <NavLink to='/adminko/admin_item_list'>список товарів</NavLink><br/>
            <NavLink className={c.green} to='/adminko/admin_add_item'>додати товар</NavLink><br/>
            <NavLink to='/adminko/admin_users_list'>список користувачів</NavLink><br/>
            <NavLink to='/adminko/admin_orders'>список замовлень</NavLink><br/>
            <NavLink to='/adminko/admin_settings'>налаштування</NavLink><br/>

        </div>
    )
}

export default AdminLinks;