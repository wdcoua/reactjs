import React, {useEffect} from "react";
import c from "./AdminDelItem.module.css";
import AdminLinks from "../AdminLinks/AdminLinks";
import {getItemListSel, getItemsListSel} from "../../redux/admin_selectors";
import {connect} from "react-redux";
import {delItem, getItemList} from "../../redux/admin_reducer";
import Preloader from "../Preloader/Preloader";
import {Redirect, withRouter} from "react-router-dom";
import AdminItemList from "../AdminItemList/AdminItemList";
import {compose} from "redux";

const AdminDelItem = (props) => {
    useEffect(()=>{
        if(props.items === null)
            props.getItemList()
        else{

        }
    },[])
    let delitem = null;

    if(props.items !== null){

        delitem = props.items.filter((item)=>{
            return item.id === props.a_id ;
        })
        delitem = delitem[0];
        console.log(delitem);
    }

    // console.log(props.a_id)
    // console.log(delitem)

    const doDelete = () => {
        console.log(delitem.id);
        props.delItem(delitem.id);
        props.history.push('/adminko/admin_item_list/')
    }
    const cancel = () => {
        console.log('del')
        console.log(props)
        props.history.push('/adminko/admin_item_list/')

    }


    return (

        <div>
            <h2>Видалення категорії</h2>
            {(props.items === null || !delitem ) ? <Preloader /> :
                <div>
                    {/*{!delitem && <Redirect to={AdminItemList}/>}*/}
                    Ти дійсно хочеш видалити категорію "{delitem.name}"? <br/>
                    <button onClick={doDelete}>Видалити</button>
                    <button onClick={cancel}>Залишити</button>
                </div>
            }
        </div>
    )
}

const mstp = (state) => {
    return {
        items: getItemsListSel(state)
    }
}

export default compose(withRouter,connect(mstp,{getItemList,delItem}))(AdminDelItem);