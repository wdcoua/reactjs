import React, {useEffect, useState} from "react";
import c from "./AdminCatList.module.css";
import AdminLinks from "../AdminLinks/AdminLinks";
import {getCatListSel} from "../../redux/admin_selectors";
import {connect} from "react-redux";
import {compose} from "redux";
import AdminListItem from "../AdminListItem/AdminListItem";
import {getCatList, saveCatsOrder} from "../../redux/admin_reducer";
import AdminListCat from "../AdminListCat/AdminListCat";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import AdminPhotoView from "../AdminPhotoView/AdminPhotoView";


const SortableItem = SortableElement(({ cat }) => (
    <div className={c.my_item2}>
        {/*<AdminPhotoView link={value} delPic={delPic}/>*/}

        <AdminListCat cat={cat}/>
    </div>

));

const SortableList = SortableContainer(({ catList }) => {
    return (
        <div>

            {catList && catList.map((cat,index)=>{
                return <SortableItem  key={`item-${index}`} index={index}  cat={cat}  />;
            })}


            {/*{items.map((value, index) => (*/}
            {/*    value !== '' && <SortableItem key={`item-${value}`} index={index} value={value} delPic={delPic} />*/}
            {/*))}*/}
        </div>
    );
});

const AdminCatList = (props) => {

    const [tempArrItems,setTAI] = useState(false);
    const [tempArrItemsChanged,setTAIChanged] = useState(false);


    const onSortEnd = ({ oldIndex, newIndex }) => {
        // console.log(oldIndex, newIndex)
        // console.log(tempArrItems)
        const newArr = arrayMove(tempArrItems, oldIndex, newIndex);
        setTAI(newArr)

        // console.log(tempArrItems)
    };

    const saveOrder = () => {
        console.log('tempArrItems')
        console.log(tempArrItems)

        let out = []
        tempArrItems.map((cat) => {
            out.push(cat.id)
        })

        out = {
            'cats': out.join()
        }

        // console.log()
        props.saveCatsOrder(out)
    }


    // debugger
    useEffect(()=>{
        props.getCatList()
    },[]) // [] == componentDidMount

    if(props.catList !== null){
        if(!tempArrItemsChanged){
            setTAI(props.catList);
            setTAIChanged(true)
        }
    }
    return (
        <div className={c.main_body}>
            <h2>Список категорій</h2>
            {/*{props.catList && props.catList.map((cat)=>{*/}
            {/*    return <AdminListCat key={cat.id} cat={cat}/>;*/}
            {/*})}*/}


            <SortableList
                catList={tempArrItems}
                // delPic={delPic}
                onSortEnd={onSortEnd}
                axis={"xy"}
                distance={10}
            />

            <button onClick={saveOrder}>Зберегти порядок</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        catList: getCatListSel(state)
    }
}

export default compose(
    connect(mapStateToProps,{getCatList,saveCatsOrder})
    // connect(mapStateToProps,null)
)(AdminCatList);