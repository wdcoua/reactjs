import React from "react";
import c from "./AdminPhotoView.module.css";
// import AdminLinks from "../AdminLinks/AdminLinks";
// import {getCatListSel} from "../../redux/admin_selectors";
// import {connect} from "react-redux";
// import {compose} from "redux";
// import AdminListItem from "../AdminListItem/AdminListItem";
// import {getCatList} from "../../redux/admin_reducer";
// import AdminListCat from "../AdminListCat/AdminListCat";

const AdminPhotoView = (props) => {
    // debugger
    // useEffect(()=>{
    //     props.getCatList()
    // },[]) // [] == componentDidMount

    const dp = (e) => {
        e.preventDefault()
        // console.log('rrrrr')
        // console.log(e.target.getAttribute('pic'))
        props.delPic(e.target.getAttribute('pic'))
    }

    return (
        <div className={c.main_body}>
            {/*{props.catList && props.catList.map((cat)=>{*/}
            <div className={c.img_container}>
                <img src={'https://sweetkids.site/imgs/'+props.link} className={c.photoView}/>

                <div className={c.img_cover}>
                    <div className={c.img_del} onClick={dp} pic={props.link}>x</div>
                </div>
            </div>


        </div>
    )
}

// const mapStateToProps = (state) => {
//     return{
//         catList: getCatListSel(state)
//     }
// }

export default AdminPhotoView
// compose(
//     connect(mapStateToProps,{getCatList})
//     // connect(mapStateToProps,null)
// )(AdminPhotoView);