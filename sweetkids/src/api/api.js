import * as axios from "axios";
import {signup} from "../redux/auth_reducer";
import {cancelOrder} from "../redux/order_reducer";
// import {setCurrentPage} from "../redux/users_reducer";

let apiKey = 'h74de44-5b55-srt44-m88h-e4g45e43ee7'
// let apiKey = '3db08625-24f8-429d-8bdb-ea405db0921e'
// baseURL = 'https://wd.co.ua/api.php'
let baseURL = 'https://sweetkids.site/api/1.0/'
// currPage = 4
export let instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
    headers: {
        'API-KEY': apiKey
    }

});


export const API = {


    getCats(catsPerPage = 10, currentPage = 1) {
        return instance
            .get('cats/count=' + catsPerPage + '&page=' + currentPage)
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data.main_data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    getItems(catsPerPage = 10, currentPage = 1) {
        return instance
            .get('items/count=' + catsPerPage + '&page=' + currentPage)
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data.main_data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    getItem(id) {
        return instance
            .get('item/id=' + id )
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data.main_data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    itemLoaded(id) {
        return instance
            .get('item/loaded&id=' + id )
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data.main_data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    getFilteredItems(itemsPerPage = 10, currentPage = 0, cats = '',sorting = [], phrase = '') {
        // console.log('cats');
        // console.log(itemsPerPage,currentPage);
        return instance
            .put('items/get&count=' + itemsPerPage + '&offset=0' ,{
                cats: cats,
                sorting: sorting,
                phrase: phrase
            })
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data.main_data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    getMoreFilteredItems(itemsPerPage = 10, offset = 0, cats = '',sorting = [],phrase='') {
        // console.log('cats');
        // console.log(cats);
        return instance
            .put('items/get&count=' + itemsPerPage + '&offset=' + offset,{
                cats: cats,
                sorting: sorting,
                phrase: phrase
            })
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data.main_data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    addCat(newCat) {
        // console.log(newCat)
        return instance
            .put('cats/add',newCat)
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    addItem(newItem) {
        // console.log(newItem)
        return instance
            .put('items/add',newItem,{ headers: {"Content-Type": "multipart/form-data" }})
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    delCat(catId) {
        // console.log(catId)
        return instance
            .delete('cats/delcat='+catId)
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    saveCat(catId,newCatData) {
        // console.log(catId)
        // console.log(newCatData)
        return instance
            .put('cats/editCat='+catId,newCatData)
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    saveCatsOrder(newCatsOrder) {
        // console.log('newCatsOrder')
        // console.log(newCatsOrder)
        return instance
            .put('cats/editCatsOrder=1',newCatsOrder)
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    delItem(itemId) {
        // console.log(itemId)
        return instance
            .delete('items/delitem='+itemId)
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    saveItem(itemId,newItemData) {
        // edit
        // console.log(itemId)
        // console.log(newItemData)
        return instance
            .put('items/editItem='+itemId,newItemData,{ headers: {"Content-Type": "multipart/form-data" }})
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },

    signup(login,email, pass,phone,addr){
        // console.log(email)
        return instance
            .put('auth/signup',{
                email: email,
                pass: pass,
                login: login,
                phone: phone,
                addr: addr,
            })
            .then(resp => {
                    // console.log('resp - signup');
                    // console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    saveInfo(addr,city, zip,np_dep,receiver, phone, pass){
        // console.log(email)
        return instance
            .put('auth/saveInfo',{
                pass: pass,
                phone: phone,
                addr: addr,
                city, zip,np_dep,receiver,
            })
            .then(resp => {
                    // console.log('resp - signup');
                    // console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    login(email, pass, remember, captcha){
        // console.log(email)
        return instance
            .put('auth/login',{
                email: email,
                pass: pass,
                rememberMe: remember,
                captcha: captcha,
            })
            .then(resp => {
                    // console.log('resp - login');
                    // console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    authMe(){
        return instance
            .get('auth/me')
            .then(resp => {
                    // console.log('resp - authMe');
                    // console.log(resp.data);
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    logOut(){
        return instance
            .delete('auth/login')
            .then(resp => {
                    // console.log('resp - logOut');
                    // console.log(resp);
                    return resp.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    getCaptcha(){
        return instance
            .get('auth/captcha')
            .then(resp => {
                    // console.log('resp - captcha');
                    // console.log(resp);
                    return resp.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },





    getCart(){
        return instance
            .get('cart/')
            .then(resp => {
                    // console.log('resp - captcha');
                    // console.log(resp);
                    return resp.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    getCartItems(){
        return instance
            .get('cart/items')
            .then(resp => {
                    // console.log('resp - captcha');
                    // console.log(resp);
                    return resp.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    // addToCart(cartData){
    //     return instance
    //         .put('cart/add',{
    //             cartData
    //         })
    //         .then(resp => {
    //                 // console.log('resp - login');
    //                 // console.log(resp);
    //                 //resp.data.cp = currentPage;
    //                 return resp.data.data
    //             }
    //         )
    //         .catch(error => { // catches errors
    //             return error.response
    //             // error handling, use error.response to access the non 2xx response
    //         });
    // },
    // removeFromCart(user_id, item_id){
    //
    // },
    emptyCart(){ // чи потрібно?
        return instance
            .delete('cart/')
            .then(resp => {
                    // console.log('resp - logOut');
                    // console.log(resp);
                    return resp.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    updateCart(newCartData){
        return instance
            .put('cart/upd',{
                newCartData
            })
            .then(resp => {
                    // console.log('resp - login');
                    // console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    createCart(){
        return instance
            .put('cart/new',{

            })
            .then(resp => {
                    // console.log('resp - login');
                    // console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },


    getOrder(orderId){
        // console.log(orderId)
        let oid;
        if(orderId !== null && orderId !== undefined)
            oid = 'orderId=' + parseInt(orderId)
        else
            oid = ''

        // console.log(orderId,oid)
        return instance
            .get('order/'+oid)
            .then(resp => {
                    // console.log('resp - captcha');
                    // console.log(resp);
                    return resp.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    changeOrderStatus(orderId,status){
        // console.log(orderId)
        // let oid;
        // if(orderId !== null && orderId !== undefined)
        //     oid = 'orderId=' + parseInt(orderId)
        // else
        //     oid = ''

        // console.log(orderId,oid)
        return instance
            .get('order/changeStatus&orderId=' + parseInt(orderId) + '&status=' + status)
            .then(resp => {
                    // console.log('resp - captcha');
                    // console.log(resp);
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    getPaymentForm(){
        return instance
            .get('pay/get_form')
            .then(resp => {
                    // console.log('resp - captcha');
                    // console.log(resp);
                    return resp.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    updateOrder(newOrderData){
        return instance
            .put('order/upd',{
                newOrderData
            })
            .then(resp => {
                    // console.log('resp - login');
                    // console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    updateOrderTimeIsUp(id){

        return instance
            .get('order/timeisup&orderId='+id)
            .then(resp => {
                    // console.log('resp - login');
                    // console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    addOrder(newOrderData){
        return instance
            .put('order/add',{
                newOrderData
            })
            .then(resp => {
                    // console.log('resp - login');
                    // console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    cancelOrder(id){
        return instance
            .get('order/cancel&orderId='+id)
            .then(resp => {
                    // console.log('resp - login');
                    // console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    confirmPayment(id){
        return instance
            .get('order/confirm&orderId='+id)
            .then(resp => {
                    // console.log('resp - login');
                    // console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },


    getSettings(){
        return instance
            .get('settings/')
            .then(resp => {
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    updateSettings(newSettings){
        return instance
            .put('settings/upd',{
                newSettings
            })
            .then(resp => {
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },


    checkInet(){
        return instance
            .get('checkInet/')
            .then(resp => {
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    getMyOrders(){
        return instance
            .get('user/getMyOrders')
            .then(resp => {
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    getFavs(){
        return instance
            .get('user/getFavs')
            .then(resp => {
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    setFavs(newFavs){
        return instance
            .put('user/setFavs',{
                newFavs
            })
            .then(resp => {
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },
    getAdminOrders(){
        return instance
            .get('order/getAdminOrders&limit=25&offset=0&orderBy=id&order=desc')
            .then(resp => {
                    return resp.data.data
                }
            )
            .catch(error => { // catches errors
                return error.response
                // error handling, use error.response to access the non 2xx response
            });
    },


}