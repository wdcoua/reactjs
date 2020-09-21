// import React from 'react';
import {addGBPostActionCreator, newGBpostChangeActionCreator, setGBPostsAC} from "../../redux/gb_reducer";
// import GuestBook from "./GuestBook";
import {connect} from "react-redux";
import GuestBookClass from "./GuestBookClass";
// import {setUsersAC} from "../../redux/users_reducer";

//
// const GuestBookContainer = () => {
//
//     return (''
//         // <StoreContext.Consumer>
//         //     {
//         //         (store) => {
//         //
//         //             let onGBNewPostChange = (text) => {
//         //                 store.dispatch(newGBpostChangeActionCreator(text));
//         //             }
//         //
//         //             let onGBAddPost = () => {
//         //
//         //                 store.dispatch(addGBPostActionCreator());//
//         //                 store.dispatch(newGBpostChangeActionCreator(''));
//         //             }
//         //
//         //             return <GuestBook
//         //
//         //                         onGBNewPostChange={onGBNewPostChange}
//         //                         onGBAddPost={onGBAddPost}
//         //                         newPostText={store.getState().gb.newPostText}
//         //                         gbPosts={store.getState().gb.gbPosts}
//         //                 />
//         //
//         //             // return <div className={c.gb}>
//         //             //     <GuestBookSendForm
//         //             //         onGBNewPostChange={onGBNewPostChange}
//         //             //         onGBAddPost={onGBAddPost}
//         //             //         newPostText={store.getState().gb.newPostText}
//         //             //     />
//         //             //
//         //             //     <GuestBookPosts gbPosts={store.getState().gb.gbPosts}/>
//         //             // </div>
//         //         }
//         //     }
//         // </StoreContext.Consumer>
//     );
// }

function mapStateToProps(state) {
    return {
        newPostText: state.gb.newPostText,
        gbPosts: state.gb.gbPosts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGBNewPostChange: (text) => {
            dispatch(newGBpostChangeActionCreator(text));
        },
        onGBAddPost: () => {
            dispatch(addGBPostActionCreator());//
            dispatch(newGBpostChangeActionCreator(''));
        },

        setGBPosts:(posts) => {
            // debugger
            dispatch(setGBPostsAC(posts));
        }

    }
}

const GuestBookContainer = connect(mapStateToProps, mapDispatchToProps)(GuestBookClass)

export default GuestBookContainer;