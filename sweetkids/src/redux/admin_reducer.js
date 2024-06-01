import {API} from "../api/api";
import {setNoInet} from "./app_reducer";


let initialState = {
    catList: null,
    itemList: null,
    orders: null,
    viewOrder: null
}

const SET_CAT_LIST = 'sweetkids/admin/SET_CAT_LIST';
const ADD_CAT = 'sweetkids/admin/ADD_CAT';
const DEL_CAT = 'sweetkids/admin/DEL_CAT';
const SAVE_CAT = 'sweetkids/admin/SAVE_CAT';
const DEL_ITEM = 'sweetkids/admin/DEL_ITEM';
const SAVE_ITEM = 'sweetkids/admin/SAVE_ITEM';
const ADD_ITEM = 'sweetkids/admin/ADD_ITEM';
const SET_ITEM_LIST = 'sweetkids/admin/SET_ITEM_LIST';
const SET_ORDERS = 'sweetkids/admin/SET_ORDERS';
const SET_VIEW_ORDER = 'sweetkids/admin/SET_VIEW_ORDER';
// const SET_ORDER_STATUS = 'sweetkids/admin/SET_ORDER_STATUS';
const UPD_ORDER_IN_LIST = 'sweetkids/admin/UPD_ORDER_IN_LIST';

const admin_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_CAT_LIST:
            // debugger
            return {
                ...state,
                catList: action.catList,
            }
        case SET_ITEM_LIST:
            // debugger
            return {
                ...state,
                itemList: action.items,
            }
        case SET_ORDERS:
            // debugger
            return {
                ...state,
                orders: action.orders,
            }
        case SET_VIEW_ORDER:
            // debugger
            return {
                ...state,
                viewOrder: action.viewOrder,
            }
        case UPD_ORDER_IN_LIST:
            // debugger
            return {
                ...state,
                // orders: action.viewOrder,

                orders: state.orders !== null ? [action.viewOrder,...(state.orders.filter((order) => {
                    return (order.id !== action.id) ? order : null
                }))] : null,
            }
        case ADD_CAT:
            // debugger
            return {
                ...state,
                catList: (state.catList !== null ? [...state.catList,action.newCat] : action.newCat),
            }
        case ADD_ITEM:
            // debugger
            return {
                ...state,
                itemList: [...state.itemList,action.newItem],
            }
        case DEL_CAT:
            // debugger
            return {
                ...state,
                catList: state.catList.filter((cat) => {return (cat.id !== action.catId) ? cat : null }),
            }
        case DEL_ITEM:
            // debugger
            return {
                ...state,
                itemList: state.itemList.filter((item) => {return (item.id !== action.itemId) ? item : null }),
            }
        case SAVE_CAT:
            // debugger
            return {
                ...state,
                catList: state.catList.filter((cat) => {
                    return (cat.id !== action.catId) ? cat : action.newCatData
                }),
            }
        case SAVE_ITEM:
            // debugger
            return {
                ...state,
                itemList: state.itemList.filter((item) => {
                    return (item.id !== action.itemId) ? item : action.newItemData
                }),
            }
        // case SET_ORDER_STATUS:
        //     // debugger
        //     return {
        //         ...state,
        //         viewOrder: action.viewOrder
        //
        //     }
        /*case LOG_OUT:
            return {
                ...state,
                isAuth: false
            }*!/

        case SET_USER_IMG:
            return {
                ...state,
                userImg: action.img
            }

        case SET_CAPTCHA_IMG:
            return {
                ...state,
                capthaImg: action.img
            }
        case SET_CAPTCHA_ANS:
            return {
                ...state,
                captchaAnswer: action.ans
            }*/
        /*        case SET_ERROR:
                    return {
                        ...state,
                        loginError:action.err
                    }*/


        default:
            return state;

    }

}

export default admin_reducer;

export const setCatList = (catList) => {
    return {type: SET_CAT_LIST, catList: catList};
}
export const setItemList = (items) => {
    return {type: SET_ITEM_LIST, items: items};
}
export const addCat = (newCat) => {
    return {type: ADD_CAT, newCat: newCat};
}
export const addItem = (newItem) => {
    return {type: ADD_ITEM, newItem: newItem};
}
export const delCatLocal = (catId) => {
    return {type: DEL_CAT, catId: catId};
}
export const saveCatLocal = (catId,newCatData) => {
    return {type: SAVE_CAT, catId: catId,newCatData: newCatData};
}
export const delItemLocal = (itemId) => {
    return {type: DEL_ITEM, itemId: itemId};
}
export const saveItemLocal = (itemId,newItemData) => {
    return {type: SAVE_ITEM, itemId: itemId,newItemData: newItemData};
}
export const setOrders = (orders) => {
    return {type: SET_ORDERS, orders: orders};
}
export const setViewOrder = (viewOrder) => {
    console.log('test 1')
    return {type: SET_VIEW_ORDER, viewOrder: viewOrder};
}
export const updOrderInOrdersList = (id,viewOrder) => {
    console.log('test')
    return {type: UPD_ORDER_IN_LIST, id:id, viewOrder: viewOrder};
}
// export const setOrderStatus = (viewOrder) => {
//     return {type: SET_ORDER_STATUS, viewOrder:viewOrder};
// }

/*  THUNKs  */

export const getCatList = () => async (dispatch) => {
    const result = await API.getCats();
    console.log(result);
    dispatch(setCatList(result.cats));
}
export const getOrders = () => async (dispatch) => {
    const result = await API.getAdminOrders();
    console.log(result);
    dispatch(setOrders(result.main_data.orders));
}
export const addNewCat = (newCat) => async (dispatch) => {
    const result = await API.addCat(newCat);
    console.log(result);
    dispatch(addCat(newCat));
}
export const delCat = (catId) => async (dispatch) => {
    const result = await API.delCat(catId);
    console.log(result);
    dispatch(delCatLocal(catId));

}
export const saveCat = (catId,newCatData) => async (dispatch) => {
    const result = await API.saveCat(catId,newCatData);
    console.log(result);
    return dispatch(saveCatLocal(catId,newCatData));

}
export const saveCatsOrder = (newCatsOrder) => async (dispatch) => {
    const result = await API.saveCatsOrder(newCatsOrder);
    console.log(result);
    return dispatch(getCatList());

}
export const delItem = (itemId) => async (dispatch) => {
    const result = await API.delItem(itemId);
    console.log(result);
    dispatch(delItemLocal(itemId));

}
export const saveItem = (itemId,newItemData) => async (dispatch) => {
    const result = await API.saveItem(itemId,newItemData);
    console.log(result);
    return dispatch(saveItemLocal(itemId,newItemData));

}
export const getItemList = () => async (dispatch) => {
    const result = await API.getItems();
    console.log('result');
    console.log(result);
    dispatch(setItemList(result.items));
}
export const addNewItem = (newItem) => async (dispatch) => {
    await API.addItem(newItem)
        .then(() => {
            dispatch(getItemList());
        })
    // console.log('addNewItem -> result');
    // console.log(result);

}


export const getAdminViewOrder = (orderId) => async (dispatch,getState) => {
    try{


        const result = await API.getOrder(orderId);
        let out = false;
        // console.log('getOrder',orderId);
        // console.log(result.data);

        // todo try...catch...

        if(result.data.error === 0){
            if(result.data.main_data.message === 'no order' || result.data.main_data.message === 'no such order' || result.data.main_data.message === 'could not get order'){


                dispatch(setViewOrder(null));

                out = result.data.main_data.message;
            }else{
                // if(result.data.main_data.order.status === 'paying'){
                //     dispatch(setPayingOrder(result.data.main_data.order))
                // }
                if(orderId !== null){
                    dispatch(setViewOrder(result.data.main_data.order));
                    // if(result.data.main_data.order.status !== 'paying' && result.data.main_data.order.id === payingOrder_id){
                    //     dispatch(setPayingOrder(null))
                    // }
                }

                out = 'ok'
                // dispatch(getCartItems());
                // console.log(result2)
                // dispatch(setCartItemsFull(result2.data.main_data));
            }
        }else{
            // error
            out = result.data.error
        }
        // dispatch(setOrderMessage(out));
    }
    catch(error){
        // console.log(error)
        dispatch(setNoInet(true))
        // console.log('NoInet')
    }

}


export const changeOrderStatus = (id,status) => async (dispatch,getState) => {
    let state = getState();
    let vo = {...state.admin.viewOrder};
    const result = await API.changeOrderStatus(id,status);

    // console.log(result);
    if(result.main_data.message === 'ok' ){
        vo.status = status;
        console.log(vo)
        dispatch(setViewOrder(vo));
        dispatch(updOrderInOrdersList(id,vo));

    }
}