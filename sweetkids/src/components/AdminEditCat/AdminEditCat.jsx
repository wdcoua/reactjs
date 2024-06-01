import React, {useEffect, useState} from "react";
import c from "./AdminEditCat.module.css";
import AdminLinks from "../AdminLinks/AdminLinks";
import {getCatListSel} from "../../redux/admin_selectors";
import {connect} from "react-redux";
import {delCat, getCatList, saveCat} from "../../redux/admin_reducer";
import Preloader from "../Preloader/Preloader";
import {Redirect, withRouter} from "react-router-dom";
import AdminCatList from "../AdminCatList/AdminCatList";
import {compose} from "redux";
import {CheckBox, createMyField, Hidden, Input, Textarea} from "../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import Info from "../common/Info/Info";

// const changeActive = (e) => {
//     console.log(e.target)
//
//
// }
const CatEditForm = ({handleSubmit, error,active,tempActive,formChanged,submitClicked,tempSubmitButtonDisabled}) => {
    // console.log('active - ' + active)
    // debugger
    return <form onSubmit={handleSubmit}>

        {createMyField(null,Hidden,'id',[])}
        Ім'я:
        {createMyField('name',Input,'catName',[])}
        Опис:
        {createMyField('description',Textarea,'catDescr',[])}
        Ім'я (RU):
        {createMyField('name',Input,'catName_ru',[])}
        Опис (RU):
        {createMyField('description',Textarea,'catDescr_ru',[])}
        <br/>
        {createMyField(null,CheckBox,'active',[],{checked: tempActive === '1', id: 'active', onClick:formChanged }, 'активно')} <br/>
        <button disabled={tempSubmitButtonDisabled}>Зберегти зміни</button>
    </form>
}

const CatEditReduxForm = reduxForm({
    form: 'catEdit'
})(CatEditForm);

const AdminEditCat = (props) => {

// debugger
    useEffect(()=>{
        if(props.cats === null)
            props.getCatList()
        else{

        }


        // let editcat = null;
        // // editcat.active = false
        //
        // if(props.cats !== null){
        //
        //     editcat = props.cats.filter((cat)=>{
        //         return cat.id === props.a_id ;
        //     })
        //     editcat = editcat[0];
        //     // console.log(editcat);
        //
        // }
        //
        //  updater(editcat);
        // console.log(editcat);
    },[]);

        // const updater = (editcat) => {
        //     window.setTimeout(()=>{
        //         console.log('updater - ' + editcat.active)
        //         setTempActive(editcat === null ? '0' : editcat.active)
        //     }, 5000)
        // }

    let editcat = null;
    // editcat.active = false


    const [tempSubmitButtonDisabled,setTempSubmitButtonDisabled] = useState(false)
    const [tempInfoVisible,setTempInfoVisible] = useState(false)
    const [tempActive,setTempActive] = useState( editcat === null ? '0' : editcat.active );
    const [tempActiveChanged,setTempActiveChanged] = useState( false ); // допоміжний, для одноразового запису
     // debugger
    if(props.cats !== null){

        editcat = props.cats.filter((cat)=>{
            return cat.id === props.a_id ;
        })
        editcat = editcat[0];
        // console.log(editcat);
        if(!tempActiveChanged){
            setTempActive(editcat.active);
            setTempActiveChanged(true)
        }

    }
    const formChanged = (e) => {
        // e.preventDefault();
        if(e.target.name === 'active'){
            // setCaptchaAnswer(e.target.value)
            console.log(e.target.checked);
            // console.log(e.target.value);
            setTempActive(e.target.checked ? '1' : '0')
        }
        // if(e !== undefined){

            // if(!tempFormFirstLoad){}
            // console.log('formChanged - ' + e.active)
            // console.log(e)
            // setTempActive(e.active)
        // }
    }

    // console.log(props.a_id)
    // console.log(delcat)

    // const doDelete = () => {
    //     console.log(editcat.id);
    //     // props.delCat(editcat.id);
    //     props.history.push('/adminko/admin_cat_list/')
    // }
    // const cancel = () => {
    //     console.log('del')
    //     console.log(props)
    //     props.history.push('/adminko/admin_cat_list/')
    //
    // }
    //
    // const submitClicked = (e) => {
    //     // e.target.disabled = 'disabled'
    //     // console.log(e.target)
    //
    // }

    const setInfoVisible = () => {
        setTempInfoVisible(true)
        setTimeout(function(){
            setTempInfoVisible(false)
        },3000)
    }

    const onSubmit = async (formData) => {
        // console.log(formData)
        // formData.save

        let out = {
            'id': formData.id,
            'name': formData.catName,
            'descr': formData.catDescr,
            'name_ru': formData.catName_ru,
            'descr_ru': formData.catDescr_ru,
            'active': tempActive
        }

        setTempSubmitButtonDisabled(true)

        let ans = await props.saveCat(formData.id,out)
            .then( () => {
                setTempSubmitButtonDisabled(false);
                setInfoVisible()
            })
        // console.log('ans')
        // console.log(ans)

    }

    return (

        <div>
            <h2>Редагування категорії</h2>
            {(props.cats === null || !editcat ) ? <Preloader /> :
                <div>
                    <CatEditReduxForm
                        onSubmit={onSubmit}
                        // onChange={formChanged}
                        {...props}
                        {...editcat}
                        tempActive={tempActive}
                        formChanged={formChanged}
                        // submitClicked={submitClicked}
                        tempSubmitButtonDisabled={tempSubmitButtonDisabled}
                    />
                    <Info text='Зміни збережено' visible={tempInfoVisible}/>
                    {/*<button onClick={doDelete}>Видалити</button>*/}
                    {/*<button onClick={cancel}>Залишити</button>*/}
                </div>
            }
        </div>
    )
}

const mstp = (state,props) => {

     // console.log(props)
    let cats = getCatListSel(state);
    // console.log(cats)

    let editcat = {
        name:'',
        descr:'',
        name_ru:'',
        descr_ru:''
    }
    if(cats !== null){
        editcat = cats.filter((cat)=>{
            return cat.id === props.a_id ;
        })
        editcat = editcat[0];
    }

    return {
        cats: getCatListSel(state),

        initialValues: {
            id: editcat.id,
            catName: editcat.name,
            catDescr: editcat.descr,
            catName_ru: editcat.name_ru,
            catDescr_ru: editcat.descr_ru,
        }
    }
}

export default compose(withRouter,connect(mstp,{getCatList,saveCat}))(AdminEditCat);