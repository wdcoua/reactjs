import React, {useEffect} from "react";
import c from "./AdminItemList.module.css";
// import AdminLinks from "../AdminLinks/AdminLinks";
import { getItemsListSel} from "../../redux/admin_selectors";
import {connect} from "react-redux";
import {compose} from "redux";
import AdminListItem from "../AdminListItem/AdminListItem";
import { getItemList} from "../../redux/admin_reducer";
import Preloader from "../Preloader/Preloader";
import Info from "../common/Info/Info";

const AdminItemList = (props) => {
    // debugger
    useEffect(()=>{
        props.getItemList()
    },[]) // [] == componentDidMount
    return ( props.items === null ? <Preloader/> :
        <div className={c.main_body}>
            {(props.a_id && props.a_id === 'item_added') ?
            <Info text='Товар додано' visible='true'/> : ''
            }
            <h2>Список товарів</h2>
            {props.items && props.items.map((item)=>{
                return <AdminListItem key={item.id} item={item}/>;
            })}

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        items: getItemsListSel(state)
    }
}

export default compose(
    connect(mapStateToProps,{getItemList})
    // connect(mapStateToProps,null)
)(AdminItemList);