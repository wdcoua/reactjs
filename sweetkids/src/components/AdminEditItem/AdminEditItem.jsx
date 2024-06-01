import React, {useEffect, useState} from "react";
import c from "./AdminEditItem.module.css";
import AdminLinks from "../AdminLinks/AdminLinks";
import {getCatListSel, getItemsListSel} from "../../redux/admin_selectors";
import {connect} from "react-redux";
import {delItem, getCatList, getItemList, saveItem} from "../../redux/admin_reducer";
import Preloader from "../Preloader/Preloader";
import {Redirect, withRouter} from "react-router-dom";
import AdminItemList from "../AdminItemList/AdminItemList";
import {compose} from "redux";
import {CheckBox, createMyField, Hidden, Input, Textarea} from "../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import Info from "../common/Info/Info";
import {required} from "../../utils/validate/validator";
import AdminPhotoView from "../AdminPhotoView/AdminPhotoView";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
// import { SortablePane, Pane } from 'react-sortable-pane';


// import React, {useState} from 'react';
// import {
//     DndContext,
//     closestCenter,
//     KeyboardSensor,
//     PointerSensor,
//     useSensor,
//     useSensors,
// } from '@dnd-kit/core';
// import {
//     arrayMove,
//     SortableContext,
//     sortableKeyboardCoordinates,
//     verticalListSortingStrategy,
// } from '@dnd-kit/sortable';
//
// // import {SortableItem} from './SortableItem';
//
// import {useSortable} from '@dnd-kit/sortable';
// import {CSS} from '@dnd-kit/utilities';
//
// export function SortableItem(props) {
//     const {
//         attributes,
//         listeners,
//         setNodeRef,
//         transform,
//         transition,
//     } = useSortable({id: props.id});
//
//     const style = {
//         transform: CSS.Transform.toString(transform),
//         transition,
//     };
//
//     return (
//         <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//             {/* ... */}
//             <AdminPhotoView link={props.id}/>
//             {/*<img src={'https://sweetkids.site/imgs/'+props.id} className={c.photoView}/>*/}
//             {/*{props.id}*/}
//         </div>
//     );
// }
//
//
// function App_dnd(i) {
//     console.log('i')
//     console.log(i)
//     const [items, setItems] = useState(i['i']);
//     console.log('items')
//     console.log(items)
//     const sensors = useSensors(
//         useSensor(PointerSensor),
//         useSensor(KeyboardSensor, {
//             coordinateGetter: sortableKeyboardCoordinates,
//         })
//     );
//
//     return (
//         <DndContext
//             sensors={sensors}
//             collisionDetection={closestCenter}
//             onDragEnd={handleDragEnd}
//         >
//             <SortableContext
//                 items={items}
//                 strategy={verticalListSortingStrategy}
//             >
//                 {items.map(id => <SortableItem key={id} id={id} />)}
//             </SortableContext>
//         </DndContext>
//     );
//
//     function handleDragEnd(event) {
//         const {active, over} = event;
//
//         if (active.id !== over.id) {
//             setItems((items) => {
//                 const oldIndex = items.indexOf(active.id);
//                 const newIndex = items.indexOf(over.id);
//
//                 return arrayMove(items, oldIndex, newIndex);
//             });
//         }
//     }
// }

// https://github.com/clauderic/react-sortable-hoc
// https://www.npmjs.com/package/react-image-gallery

// const changeActive = (e) => {
//     console.log(e.target)
//
//
// }
const ItemEditForm = ({handleSubmit, error,active,tempActive,formChanged,submitClicked,tempSubmitButtonDisabled,categories,photo,cats,catsChecked,setCatsChecked,tempArrItems,setTAI,onSortEnd,change,setTempFiles,tempFiles,tempOldPriceActive,setTempOldPriceActive}) => {
    // console.log('active - ' + active)
    // debugger


    // let photos = (photo) => {
    //     let ph = photo.split(',');
    //     console.log(ph)
    //     return ph;
    // }


    const combineCheckedCats = (e) => {
        // setCatsChecked()
        // console.log(e.target.getAttribute('cat_id'))

        // console.log(catsChecked)
        // console.log(parseInt(e.target.getAttribute('cat_id')))
        // console.log((e.target.checked === true))

        const sss = parseInt(e.target.getAttribute('cat_id'))
        const ddd = (e.target.checked === true)
        // console.log(sss)
        // console.log(ddd)


        catsChecked[sss] = ddd;
        // console.log('catsChecked 1')
        // console.log(catsChecked)
        setCatsChecked(catsChecked)
        // console.log('catsChecked 2')
        // console.log(catsChecked)
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
        setTempOldPriceActive(e.target.checked ? '1' : '0')
    }


    const photoChanged = (e) => {
        e.preventDefault()
        // console.log('e.target')
        // console.log(e.target)
        setTempFiles(e.target.files)
        // debugger
        // console.log(tempFiles)

    }

    const delPic = (e) => {
        // console.log('delPic')
        // console.log(e)

        setTAI(tempArrItems.filter((i)=>{
            return i !== e && i !== ''
        }))
    }

    return <form onSubmit={handleSubmit}>

        <button disabled={tempSubmitButtonDisabled}>Зберегти зміни</button> <br/><br/>
        {createMyField(null,Hidden,'id',[])}
        {/*Ім'я:*/}
        {/*{createMyField('name',Input,'itemName',[])}*/}
        {/*Опис:*/}
        {/*{createMyField('description',Textarea,'itemDescr',[])}<br/>*/}
        <div className={c.field_name}>{createMyField(null,CheckBox,'active',[],{checked: tempActive === '1', id: 'active', onClick:formChanged }, 'Активувати: ',1)}</div> <br/>



        {/*{createMyField(null,CheckBox,'active',null,{checked: tempActiveChecked,onClick:setTempActiveCheckedLocal},'Активувати: ',1)}<br/>*/}

        <div className={c.field_name}>Назва:</div>
        {createMyField('Назва товару',Input,'itemName',[required])}<br/>
        <div className={c.field_name}>Опис:</div>
        {createMyField('Опис',Textarea,'itemDescr',[])}<br/>
        <div className={c.field_name}>Назва (RU):</div>
        {createMyField('Назва товару російською',Input,'itemNameRu',[required])}<br/>
        <div className={c.field_name}>Опис (RU):</div>
        {createMyField('Опис російською',Textarea,'itemDescrRu',[])}<br/>
        <div className={c.field_name}>Кількість (тільки число):</div>
        {createMyField('Кількість',Input,'count',[])}<br/>
        <div className={c.field_name}>Вартість (тільки число):</div>
        {createMyField('Вартість',Input,'price',[],null)}<br/>

        <div className={c.field_name}>Розмір (через кому, якщо кілька):</div>
        {createMyField('Розмір',Input,'size',[],null)}<br/>
        <div className={c.field_name}>Зріст (в см., через кому, якщо кілька):</div>
        {createMyField('Зріст', Input, 'height', [], null)}<br/>
        <div className={c.field_name}>Вік (роки, тільки число):</div>
        {createMyField('Вік (роки)', Input, 'age_y', [], null)}<br/>
        <div className={c.field_name}>Вік (місяці, тільки число):</div>
        {createMyField('Вік (місяці)',Input,'age_m',[],null)}<br/>

        <div className={c.field_name}>Фото:</div> <br/>
        {/*{photo.split(',').map((p) => {*/}
        {/*    return <AdminPhotoView key={Math.floor(Math.random() * 1000)} link={p}/>;*/}
        {/*})}*/}

        {/*<App_dnd i={tempArrItems}/>*/}

        <SortableList
            items={tempArrItems}
            delPic={delPic}
            onSortEnd={onSortEnd}
            axis={"xy"}
            distance={10}
        />

        Додати ще фото: <br/>
        <input onChange={photoChanged} name='photo_files' type='file' multiple /><br/><br/>
        {/*<SimpleUncontrolledExample />*/}

        {/*<input onChange={photoChanged} name='photo' type='file' multiple /><br/><br/>*/}
        {/*{createMyField('Фото',FileUpload,'photo',[], {onChange: photoChanged})}*/}
        <div className={c.field_name}>Категорії:</div>
        <br/>
        {
            // categories.split(',').map((cat_id)=>{
            //     let cat = cats.filter((cc) => {
            //         return cc.id === cat_id;
            //     })
            //     cat = cat[0]
            //
            //     // console.log(cat)
            //     return <div key={cat_id}>
            //         {cat.active === '1' && createMyField(null,CheckBox,'cats['+cat.id+']',[],null,cat.name)}
            //
            //     </div>
            // });

            cats.map((cat)=> {
                // let scf =  selected_cats.filter((sc) => {
                //     return sc === cat.id;
                // })

                // console.log()

                return <div key={cat.id}>
                {cat.active === '1' && ( cat.name === '***** interval *****' ? <div>&nbsp;</div> : createMyField(null,CheckBox,'cats['+cat.id+']',[],{checked:catsChecked[cat.id], onClick:combineCheckedCats,cat_id:cat.id},cat.name))}

                </div>

            })



        }<br/>
        <fieldset>
            <legend><div className={c.field_name}>Знижки</div></legend>
            Знижка в грошах (тільки число):
            {createMyField('15', Input, 'discount_money', [])}<br/>
            Знижка у відсотках (тільки число):
            {createMyField('5', Input, 'discount_percent', [])}<br/>
        </fieldset>


        <fieldset>
            <legend><div className={c.field_name}>Стара ціна:</div></legend>
            {createMyField('Стара ціна (тільки число)',Input,'old_price',[],{onChange:oldPriceChanged})}<br/>

            {createMyField('Активувати стару ціну',CheckBox,'old_price_active',[],{checked: tempOldPriceActive === '1', onClick:oldPriceActivatorChanged},'Активувати стару ціну: ',1)}<br/>
        </fieldset>
        <br/>


        <div className={c.field_name}>Порядок (тільки число):</div>
        {createMyField('по-замовчуванню - 10', Input, 'item_order', [])}<br/>


    </form>
}

const ItemEditReduxForm = reduxForm({
    form: 'itemEdit'
})(ItemEditForm);

















const SortableItem = SortableElement(({ value,index,delPic }) => (
    <div className={c.my_item2}>
        <AdminPhotoView link={value} delPic={delPic}/>
    </div>

));


const SortableList = SortableContainer(({ items,delPic }) => {
    return (
        <div>
            {items.map((value, index) => (
                value !== '' && <SortableItem key={`item-${value}`} index={index} value={value} delPic={delPic} />
            ))}
        </div>
    );
});



// function SimpleUncontrolledExample() {
//     const panes = [0, 1, 2].map(key => (
//         <Pane key={key} defaultSize={{ width: '100%', height: 120 }}>
//             00{key}
//         </Pane>
//     ));
//     return (
//         <div>
//             <SortablePane direction="vertical" margin={20} defaultOrder={['0', '1', '2']}>
//                 {panes}
//             </SortablePane>
//         </div>
//     );
// }


// https://docs.dndkit.com/presets/sortable





const AdminEditItem =  (props) => {

    // document.getElementsByTagName('img').ondragstart = function() { return false; };

    // const [tempActiveChecked,setTempActiveChecked] = useState(true)

// debugger
    useEffect(() => {




        // let prom1 = '',prom2 = '';
        if (props.items === null) {
            // console.log('getItemList')
            props.getItemList()
        }

        if (props.cats === null) {
            props.getCatList()
        }

        // await Promise.all([prom1, prom2])
        //     .then(() => {
        // console.log(prom1)
        // console.log(prom2)
        //
        //         if(props.items !== null){
        //             edititem = props.items.filter((item)=>{
        //                 return item.id === props.a_id ;
        //             })
        //             edititem = edititem[0];
        //         }
        //         console.log(props.items)
        //         console.log(edititem)
        //
        //         if(edititem.photo !== undefined){
        //             const arr_items = edititem.photo.split(',');//['1','2','3']
        //             // const [tempArrItems,setTAI] = useState(arr_items)
        //             setTAI(arr_items)
        //         }
        //
        //         if(edititem.categories !== undefined){
        //             let selected_cats = edititem.categories.split(',');
        //             if (props.cats !== null) {
        //                 props.cats.map((cat) => {
        //                     let scf = selected_cats.filter((sc) => {
        //                         return sc === cat.id;
        //                     })
        //                     return catsCheckedArr[cat.id] = (scf[0] !== undefined)
        //                     //     let temp_cat_name = ('tempCatChecked_'+cat.id);
        //                     // let set_temp_cat_name = ('tempCatChecked_'+cat.id);
        //                     // [temp_cat_name,set_temp_cat_name] = useState(null)
        //                 });
        //                 // return catsCheckedArr;
        //                 console.log(catsCheckedArr)
        //             }
        //         }
        //
        //     })



        // let edititem = null;
        // // edititem.active = false
        //
        // if(props.items !== null){
        //
        //     edititem = props.items.filter((item)=>{
        //         return item.id === props.a_id ;
        //     })
        //     edititem = edititem[0];
        //     // console.log(edititem);
        //
        // }
        //
        //  updater(edititem);
        // console.log(edititem);
    },[]);

    let catsCheckedArr = [];
    const [catsChecked,setCatsChecked] = useState(catsCheckedArr);
    const [catsCheckedChanged,setCatsCheckedChanged] = useState(false);
    const [tempFiles,setTempFiles] = useState(null)

    let edititem = props.edititem;



    // test moving
    const onSortEnd = ({ oldIndex, newIndex }) => {
        // console.log(oldIndex, newIndex)
        // console.log(tempArrItems)
        const newArr = arrayMove(tempArrItems, oldIndex, newIndex);
        setTAI(newArr)

        // console.log(tempArrItems)
    };
    const arr_items = [];//props.edititem.photo.split(',');//['1','2','3']
    const [tempArrItems,setTAI] = useState(arr_items) // фото
    const [tempArrItemsChanged,setTAIChanged] = useState(false) // фото

    const [tempActive,setTempActive] = useState( '0' );
    const [tempActiveChanged,setTempActiveChanged] = useState( false );

    const [tempOldPriceActive,setTempOldPriceActive] = useState( '0' );
    const [tempOldPriceActiveChanged,setTempOldPriceActiveChanged] = useState( false );


    if(props.items !== null){
        edititem = props.items.filter((item) => {
            return item.id === props.a_id;
        })
        edititem = edititem[0];

        if(!tempActiveChanged){
            // console.log('edititem.active')
            // console.log(edititem.active)
            setTempActive(edititem.active);
            setTempActiveChanged(true)
        }
        if(!tempOldPriceActiveChanged){
            // console.log('edititem.old_price_active')
            // console.log(edititem.old_price_active)
            setTempOldPriceActive(edititem.old_price_active);
            setTempOldPriceActiveChanged(true)
        }

        if (edititem.photo !== undefined) {
            const arr_items = edititem.photo.split(',');//['1','2','3']
            // const [tempArrItems,setTAI] = useState(arr_items)
            if(!tempArrItemsChanged){
                setTAI(arr_items)
                setTAIChanged(true)
            }

        }

        if (edititem.categories !== undefined) {
            let selected_cats = edititem.categories.split(',');
            if (props.cats !== null) {
                props.cats.map((cat) => {
                    let scf = selected_cats.filter((sc) => {
                        return sc === cat.id;
                    })
                    return catsCheckedArr[cat.id] = (scf[0] !== undefined)
                    //     let temp_cat_name = ('tempCatChecked_'+cat.id);
                    // let set_temp_cat_name = ('tempCatChecked_'+cat.id);
                    // [temp_cat_name,set_temp_cat_name] = useState(null)
                });
                // return catsCheckedArr;
                // console.log(catsCheckedArr)
                if(!catsCheckedChanged){
                    setCatsChecked(catsCheckedArr);
                    setCatsCheckedChanged(true)
                }

            }
        }
    }
    // console.log(props.items)
    // console.log(edititem)



    // const updater = (edititem) => {
        //     window.setTimeout(()=>{
        //         console.log('updater - ' + edititem.active)
        //         setTempActive(edititem === null ? '0' : edititem.active)
        //     }, 5000)
        // }

    // let edititem = props.edititem;
    // edititem.active = false

    // if(props.items !== null){
    //
    //     edititem = props.items.filter((item)=>{
    //         return item.id === props.a_id ;
    //     })
    //     edititem = edititem[0];
    //     // console.log(edititem);
    //
    // }

    const [tempSubmitButtonDisabled,setTempSubmitButtonDisabled] = useState(false)
    const [tempInfoVisible,setTempInfoVisible] = useState(false)
     // debugger
    const formChanged = (e) => {
        // e.preventDefault();
        if(e.target.name === 'active'){
            // setCaptchaAnswer(e.target.value)
            // console.log(e.target.checked);
            // console.log(e.target.value);
            setTempActive(e.target.checked ? '1' : '0')
        }
        // if(e.target.name === 'old_price_active'){
        //     // setCaptchaAnswer(e.target.value)
        //     console.log(e.target.checked);
        //     // console.log(e.target.value);
        //     setTempOldPriceActive(e.target.checked ? '1' : '0')
        // }
        // if(e !== undefined){
            // if(!tempFormFirstLoad){}
            // console.log('formChanged - ' + e.active)
            // console.log(e)
            // setTempActive(e.active)
        // }
    }

    // console.log(props.a_id)
    // console.log(delitem)
    // const doDelete = () => {
    //     console.log(edititem.id);
    //     // props.delItem(edititem.id);
    //     props.history.push('/adminko/admin_item_list/')
    // }
    // const cancel = () => {
    //     console.log('del')
    //     console.log(props)
    //     props.history.push('/adminko/admin_item_list/')
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
        // console.log(formData,tempActive,tempOldPriceActive)
        // formData.save


        let out = new FormData()
        out.append('id',formData.id)
        out.append('name',formData.itemName)
        out.append('descr',formData.itemDescr)
        out.append('name_ru',formData.itemNameRu)
        out.append('descr_ru',formData.itemDescrRu)
        out.append('active',tempActive)
        out.append('count',formData.count)
        out.append('price',formData.price)
        out.append('size',formData.size)
        out.append('height',formData.height)
        out.append('age_m',formData.age_m)
        out.append('age_y',formData.age_y)
        out.append('prev_photo',tempArrItems.join() )
        out.append('cats',catsChecked.join() )
        out.append('discount_money',formData.discount_money)
        out.append('discount_percent',formData.discount_percent)
        out.append('old_price',formData.old_price)
        out.append('old_price_active',tempOldPriceActive)
        out.append('item_order',formData.item_order)


        if(tempFiles !== null){
            for(let i = 0; i+1 <= tempFiles.length;i++){
                out.append('photo_files[]',tempFiles[i]);

                // console.log('ddd')
                // console.log(ddd)
                // console.log('i - ' + i)
                // console.log(tempFiles[i])
            }
        }

        // let out2 = {
        //     'id': formData.id,
        //     'name': formData.itemName,
        //     'descr': formData.itemDescr,
        //     'active': formData.active ? '1' : '0',
        //     'count': formData.count,
        //     'price': formData.price,
        //     'photo': tempArrItems.join(),
        //     'cats': catsChecked.join(),
        //     'discount_money': formData.discount_money,
        //     'discount_percent': formData.discount_percent,
        //     'old_price': formData.count,
        //     'old_price_active': formData.old_price_active ? '1' : '0',
        //     'item_order': formData.item_order,
        //
        //
        // }

        setTempSubmitButtonDisabled(true)

        await props.saveItem(formData.id,out)
            .then( () => {
                setTempSubmitButtonDisabled(false);
                setInfoVisible()
            })
        // console.log('ans')
        // console.log(ans)

    }
    // debugger
    return ( (props.cats === null || props.items === null || !edititem || edititem.photo === undefined) ? <Preloader/> :

        <div>
            <h2>Редагування товару</h2>
            {(props.items === null || !edititem || edititem.photo === undefined ) ? <Preloader /> :
                <div>
                    <ItemEditReduxForm
                        onSubmit={onSubmit}
                        // onChange={formChanged}
                        {...props}
                        {...edititem}
                        tempActive={tempActive}
                        formChanged={formChanged}
                        // submitClicked={submitClicked}
                        tempSubmitButtonDisabled={tempSubmitButtonDisabled}
                        catsChecked={catsChecked}
                        setCatsChecked={setCatsChecked}
                        onSortEnd={onSortEnd}
                        tempArrItems={tempArrItems}
                        setTAI={setTAI}
                        tempFiles={tempFiles}
                        setTempFiles={setTempFiles}
                        tempOldPriceActive={tempOldPriceActive}
                        setTempOldPriceActive={setTempOldPriceActive}
                    />
                    <Info text='Зміни збережено' visible={tempInfoVisible}/>
                    {/*<button onClick={doDelete}>Видалити</button>*/}
                    {/*<button onClick={cancel}>Залишити</button>*/}
                    {/*<SortableList*/}
                    {/*    items={tempArrItems}*/}
                    {/*    onSortEnd={onSortEnd}*/}
                    {/*    axis={"xy"} />*/}
                </div>
            }
        </div>
    )
}

const mstp = (state,props) => {

     // console.log(props)
    let items = getItemsListSel(state);
    // console.log(items)

    let edititem = {
        // id: 0,
        // name:'',
        // descr:''
    }
    if(items !== null){
        edititem = items.filter((item)=>{
            return item.id === props.a_id ;
        })
        edititem = edititem[0];
    }

    let ages = (edititem.age !== undefined && edititem.age !== null && edititem.age !== '') ? edititem.age.split('_')  : ['','']
        // console.log('edititem')
        // console.log(edititem)
    return {
        items: getItemsListSel(state),
        edititem: edititem,
        cats: getCatListSel(state),
/*
        id',formData.id)
        out.append('name',formData.itemName)
        out.append('descr',formData.itemDescr)
        out.append('active',formData.active ? '1' : '0')
        out.append('count',formData.count)
        out.append('price',formData.price)
        out.append('prev_photo',tempArrItems.join() )
        out.append('cats',catsChecked.join() )
        out.append('discount_money',formData.discount_money)
        out.append('discount_percent',formData.discount_percent)
        out.append('old_price',formData.old_price)
        out.append('old_price_active',formData.old_price_active ? '1' : '0')
        out.append('item_order
            */

        initialValues: {
            id: edititem.id !== undefined ? edititem.id : '',
            itemName: edititem.name !== undefined ? edititem.name : '',
            itemDescr: edititem.descr !== undefined ? edititem.descr : '',
            itemNameRu: edititem.name_ru !== undefined ? edititem.name_ru : '',
            itemDescrRu: edititem.descr_ru !== undefined ? edititem.descr_ru : '',
            count: edititem.count !== undefined ? edititem.count : '',
            price: edititem.price !== undefined ? edititem.price : '',
            size: edititem.size !== undefined ? edititem.size : '',
            height: edititem.height !== undefined ? edititem.height : '',
            age_y: ages[0],
            age_m: ages[1],
            discount_money: edititem.discount_money !== undefined ? edititem.discount_money : '',
            discount_percent: edititem.discount_percent !== undefined ? edititem.discount_percent : '',
            old_price: edititem.old_price !== undefined ? edititem.old_price : '',
            // old_price_active: edititem.old_price_active !== undefined ? edititem.old_price_active : '',
            item_order: edititem.item_order !== undefined ? edititem.item_order : '',
        }
    }
}

export default compose(withRouter,connect(mstp,{getItemList,saveItem,getCatList}))(AdminEditItem);