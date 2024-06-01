import React from "react";
import c from "./AdminMenu.module.css";
import {NavLink} from "react-router-dom";
import AdminLinks from "../AdminLinks/AdminLinks";

const AdminMenu = () => {

    return (
        <div className={c.left_block}>
            <AdminLinks/>

        </div>
    )
}

export default AdminMenu;