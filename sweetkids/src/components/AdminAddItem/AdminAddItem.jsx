import React, {useEffect, useState} from "react";
import c from "./AdminAddItem.module.css";
// import AdminLinks from "../AdminLinks/AdminLinks";
import {CheckBox, createMyField, FileUpload, Input, Textarea} from "../common/FormsControls/FormsControls";
import {reduxForm,change} from "redux-form";
import {required} from "../../utils/validate/validator";
import {addNewItem, getCatList} from "../../redux/admin_reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getCatListSel} from "../../redux/admin_selectors";
import Preloader from "../Preloader/Preloader";

const AddItemForm = ({handleSubmit,cats,setTempFiles,tempFiles,tempActiveChecked,setTempActiveChecked,tempPrice,change}) => {

    const photoChanged = (e) => {
        e.preventDefault()
        // console.log('e.target')
        // console.log(e.target)
        setTempFiles(e.target.files)
        // debugger
        // console.log(tempFiles)

    }

    const setTempActiveCheckedLocal = () => {
        setTempActiveChecked(!tempActiveChecked)
        // console.log('tempActiveChecked')
        // console.log(tempActiveChecked)
    }

    const oldPriceChanged = (e) => {
        let price = e.target.form.price.value;
        let oldPrice = e.target.value;
        if(price > 0 && oldPrice > 0){
            change( 'discount_money', oldPrice - price)
            change( 'discount_percent', Math.round((oldPrice - price) / oldPrice * 100*100)/100)
        }
        // console.log(e.target.form.name.value)
    }
    const oldPriceActivatorChanged = (e) => {

    }

    return <form onSubmit={handleSubmit} id='addItemForm'>
        <button>Додати</button> <br/><br/>

        {createMyField(null,CheckBox,'active',null,{checked: tempActiveChecked,onClick:setTempActiveCheckedLocal},'Активувати: ',1)}<br/>

        Назва:
        {createMyField('Назва товару',Input,'name',[required])}<br/>
        Опис:
        {createMyField('Опис',Textarea,'descr',[])}<br/>
        Назва (RU):
        {createMyField('Назва товару російською',Input,'name_ru',[required])}<br/>
        Опис (RU):
        {createMyField('Опис російською',Textarea,'descr_ru',[])}<br/>
        Кількість (тільки число):
        {createMyField('Кількість',Input,'count',[])}<br/>
        Вартість (тільки число):
        {createMyField('Вартість',Input,'price',[],null)}<br/>
        Розмір (через кому, якщо кілька):
        {createMyField('Розмір',Input,'size',[],null)}<br/>
        Зріст (в см., через кому, якщо кілька):
        {createMyField('Зріст',Input,'height',[],null)}<br/>
        Вік (роки, тільки число):
        {createMyField('Вік (роки)',Input,'age_y',[],null)}<br/>
        Вік (місяці, тільки число):
        {createMyField('Вік (місяці)',Input,'age_m',[],null)}<br/>


        Фото: <br/>
        <input onChange={photoChanged} name='photo' type='file' multiple /><br/><br/>
        {/*{createMyField('Фото',FileUpload,'photo',[], {onChange: photoChanged})}*/}
        <fieldset>
            <legend>Категорії:</legend>
        <br/>
        {
            cats.map((cat)=>{
                return <div key={cat.id}>
                    {cat.active === '1' && ( cat.name === '***** interval *****' ? <div>&nbsp;</div> :
                        createMyField(null,CheckBox,'cats['+cat.id+']',[],null,cat.name)
                    )
                    }

                </div>
            })
        }</fieldset>
        <fieldset>
            <legend>Знижки</legend>
        Знижка в грошах (тільки число):
        {createMyField('15', Input, 'discount_money', [])}<br/>
        Знижка у відсотках (тільки число):
        {createMyField('5', Input, 'discount_percent', [])}<br/>
        </fieldset>


        <fieldset>
            <legend>Стара ціна:</legend>
            {createMyField('Стара ціна (тільки число)',Input,'old_price',[],{onChange:oldPriceChanged})}<br/>

            {createMyField('Активувати стару ціну',CheckBox,'old_price_active',[],{onClick:oldPriceActivatorChanged},'Активувати стару ціну',1)}<br/>
        </fieldset>
<br/>


        Порядок (тільки число):
        {createMyField('по-замовчуванню - 10', Input, 'item_order', [])}<br/>


        <br/><br/><button>Додати</button>
    </form>
}

const AddItemFormRedux = reduxForm({
    form: 'addItem'
})(AddItemForm);
const AdminAddItem = React.memo(({addNewItem,history,cats,getCatList,change}) => {

    const [tempFiles,setTempFiles] = useState(null)
    const [tempActiveChecked,setTempActiveChecked] = useState(true)
    const [tempPrice,setTempPrice] = useState(19)
    useEffect(()=>{
        if(cats === null){
            getCatList();
        }
    },[])


    const onSubmit = async (form_data) => {
        // debugger
        // let out = {
        //     'name': formData.name,
        //     'descr': formData.descr,
        //     'active': formData.active,
        //     'count': formData.active,
        //     'price': formData.active,
        //     'photo': formData.active,
        //     'active': formData.active,
        //     'active': formData.active,
        //     'active': formData.active,
        //     'active': formData.active,
        //     'active': formData.active,
        //
        // }

        let out = new FormData()
        out.append('name',form_data.name)
        out.append('descr',form_data.descr)
        out.append('name_ru',form_data.name_ru)
        out.append('descr_ru',form_data.descr_ru)
        out.append('active',tempActiveChecked ? '1' : '0')
        out.append('count',form_data.count)
        out.append('price',form_data.price)
        out.append('size',form_data.size)
        out.append('height',form_data.height)
        out.append('age_m',form_data.age_m)
        out.append('age_y',form_data.age_y)
        out.append('discount_money',form_data.discount_money)
        out.append('discount_percent',form_data.discount_percent)
        out.append('old_price',form_data.old_price)
        out.append('old_price_active',form_data.old_price_active ? '1' : '0')
        out.append('item_order',form_data.item_order)
        out.append('cats',form_data.cats)
        // out.append('photo1',tempFiles[0]);
        // out.append('photo2',tempFiles[1]);

        // console.log('tempFiles')
        // console.log(tempFiles.length)
        // console.log(tempFiles[0])
        // console.log(tempFiles[1])
        if(tempFiles !== null){
            for(let i = 0; i+1 <= tempFiles.length;i++){
                out.append('photo[]',tempFiles[i]);

                // console.log('ddd')
                // console.log(ddd)
                // console.log('i - ' + i)
                // console.log(tempFiles[i])
            }
        }

        console.log('out')
        console.log(form_data)
        await addNewItem(out).then(()=>{
            history.push('/adminko/admin_item_list/item_added')
            // console.log('item added')
        });
        // console.log(form_data.cats)
        // history.push('/adminko/admin_item_list/')
    };
    return ( cats === null ? <Preloader/> :
        <div className={c.main_body}>
            <h2>Додавання товару</h2>
            <AddItemFormRedux
                onSubmit={onSubmit}
                cats={cats}
                setTempFiles={setTempFiles}
                tempFiles={tempFiles}
                setTempActiveChecked={setTempActiveChecked}
                tempActiveChecked={tempActiveChecked}
                tempPrice={tempPrice}
                change={change}
            />
        </div>
    )
})

const mstp = (state) => {
    return {
        cats:getCatListSel(state)
    }
}

export default compose(withRouter,connect(mstp,{addNewItem,getCatList}))(AdminAddItem);