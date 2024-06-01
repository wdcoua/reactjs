import React, {useEffect} from "react";
import c from "./AdminDelCat.module.css";
import AdminLinks from "../AdminLinks/AdminLinks";
import {getCatListSel} from "../../redux/admin_selectors";
import {connect} from "react-redux";
import {delCat, getCatList} from "../../redux/admin_reducer";
import Preloader from "../Preloader/Preloader";
import {Redirect, withRouter} from "react-router-dom";
import AdminCatList from "../AdminCatList/AdminCatList";
import {compose} from "redux";

const AdminDelCat = (props) => {
    useEffect(()=>{
        if(props.cats === null)
            props.getCatList()
        else{

        }
    },[])
    let delcat = null;

    if(props.cats !== null){

        delcat = props.cats.filter((cat)=>{
            return cat.id === props.a_id ;
        })
        delcat = delcat[0];
        console.log(delcat);
    }

    // console.log(props.a_id)
    // console.log(delcat)

    const doDelete = () => {
        console.log(delcat.id);
        props.delCat(delcat.id);
        props.history.push('/adminko/admin_cat_list/')
    }
    const cancel = () => {
        console.log('del')
        console.log(props)
        props.history.push('/adminko/admin_cat_list/')

    }


    return (

        <div>
            <h2>Видалення категорії</h2>
            {(props.cats === null || !delcat ) ? <Preloader /> :
                <div>
                    {/*{!delcat && <Redirect to={AdminCatList}/>}*/}
                    Ти дійсно хочеш видалити категорію "{delcat.name}"? <br/>
                    <button onClick={doDelete}>Видалити</button>
                    <button onClick={cancel}>Залишити</button>
                </div>
            }
        </div>
    )
}

const mstp = (state) => {
    return {
        cats: getCatListSel(state)
    }
}

export default compose(withRouter,connect(mstp,{getCatList,delCat}))(AdminDelCat);