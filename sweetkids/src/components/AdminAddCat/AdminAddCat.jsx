import React from "react";
import c from "./AdminAddCat.module.css";
// import AdminLinks from "../AdminLinks/AdminLinks";
import {CheckBox, createMyField, Input, Textarea} from "../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {required} from "../../utils/validate/validator";
import {addNewCat} from "../../redux/admin_reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const AdminAddCat = React.memo((props) => {

    const onSubmit = (formData) => {
        // debugger
        let out = {
            'name': formData.name,
            'descr': formData.descr,
            'name_ru': formData.name_ru,
            'descr_ru': formData.descr_ru,
            'active': formData.active,

        }
        props.addNewCat(out);
        props.history.push('/adminko/admin_cat_list/')
    };
    const addInterval = () => {
        // debugger
        let out = {
            'name': '***** interval *****',
            'descr': '',
            'name_ru': '',
            'descr_ru': '',
            'active': '1',

        }
        props.addNewCat(out);
        props.history.push('/adminko/admin_cat_list/')
    };
    return (
        <div className={c.main_body}>
            <h2>Додавання категорії</h2>
            <AddCatFormRedux onSubmit={onSubmit} />
            <button onClick={addInterval}>Додати проміжок</button>
        </div>
    )
})

const AddCatForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <button>Додати</button> <br/><br/>

        Назва:
        {createMyField('name',Input,'name',[required])}
        Опис:
        {createMyField('description (optional)',Textarea,'descr',[])}
        Назва (RU):
        {createMyField('name',Input,'name_ru',[required])}
        Опис (RU):
        {createMyField('description (optional)',Textarea,'descr_ru',[])}
        Активувати:
        {createMyField(null,CheckBox,'active')}

        <br/><br/><button>Додати</button>
    </form>
}

const AddCatFormRedux = reduxForm({
    form: 'addCat'
})(AddCatForm);

// const mstp = (state) => {
//     reryrn
// }

export default compose(withRouter,connect(null,{addNewCat}))(AdminAddCat);