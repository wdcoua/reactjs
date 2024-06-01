import React from "react";
import c from "./Main.module.css"
import {Redirect, Route, Switch} from "react-router-dom";
import {withSuspenseWrapper} from "../hoc/withSuspenseWrapper/withSuspenseWrapper";
import Index from "../Index/Index";
import Admin from "../Admin/Admin";
import Cabinet from "../Cabinet/Cabinet";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Item from "../Item/Item";
import Cart from "../Cart/Cart";
import CartPage from "../CartPage/CartPage";
import Order from "../Order/Order";
import OrderCompleted from "../Pay/Pay";
import Pay from "../Pay/Pay";
import Category from "../Category/Category";
import MyOrders from "../MyOrders/MyOrders";
import ViewOrder from "../ViewOrder/ViewOrder";
import Favourites from "../Favourites/Favourites";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import About from "../About/About";
import Delivery_Pay from "../Delivery_Pay/Delivery_Pay";
import Contacts from "../Contacts/Contacts";
import FAQ from "../FAQ/FAQ";

const Main = () => {

    return (
        <div className={c.mainpart}>
            <Switch>
                <Route exact path='/' render={() => (
                    <Index/>
                )}/>
                {/*<Route exact path='/' render={() => ( <ExamplesContainer/> )}/>*/}
                <Route exact path='/index' render={() => (<Redirect to={'/'}/>)}/>
                {/*<Route path='/index' render={() => (<ExamplesContainer/>)}/>*/}
                {/*<Route path='/adminko' render={withSuspenseWrapper(Admin)}/>*/}
                <Route path='/adminko/:apage?/:id?' render={withSuspenseWrapper(Admin)}/>
                {/*<Route path='/cabinet' render={()=>(<Redirect to={'/login'}/>)}/>*/}
                <Route path='/cabinet' render={withSuspenseWrapper(Cabinet)}/>
                <Route path='/my_orders' render={withSuspenseWrapper(MyOrders)}/>
                <Route path='/view_order/:id' render={withSuspenseWrapper(ViewOrder)}/>
                <Route path='/login/:sc?' render={withSuspenseWrapper(Login)} />
                <Route path='/signup' render={() => (<Signup/>)}/>
                <Route path='/item/:id?' render={withSuspenseWrapper(Item)}/>
                <Route path='/cart' render={withSuspenseWrapper(CartPage)}/>
                <Route path='/order' render={withSuspenseWrapper(Order)}/>
                <Route path='/pay/:id?' render={withSuspenseWrapper(Pay)}/>
                <Route path='/category/:id?' render={withSuspenseWrapper(Category)}/>
                <Route path='/favourites' render={withSuspenseWrapper(Favourites)}/>
                <Route path='/my_info' render={withSuspenseWrapper(PersonalInfo)}/>
                <Route path='/about' render={withSuspenseWrapper(About)}/>
                <Route path='/delivery_pay' render={withSuspenseWrapper(Delivery_Pay)}/>
                <Route path='/contacts' render={withSuspenseWrapper(Contacts)}/>
                <Route path='/faq' render={withSuspenseWrapper(FAQ)}/>
                {/*<Route path='/users' render={withSuspenseWrapper(UsersContainer)}/>*/}
                {/*<Route path='/profile/:userID?' render={withSuspenseWrapper(ProfileContainer)}/>*/}
                {/*<Route path='/myprofile' render={withSuspenseWrapper(MyProfile)}/>*/}
                {/*<Route exact path='/login/facebook' render={() => <div>From FaceBook</div>}/>*/}
                {/*<Route path='/login' render={withSuspenseWrapper(Login)}/>*/}
                {/*<Route path='/reg' render={withSuspenseWrapper(Login)}/>*/}

                <Route path='*' render={() => <div>404 <br/>Page Not Found</div>}/>
            </Switch>

        </div>
    )
}

export default Main;