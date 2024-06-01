import React, {useEffect, useState} from "react";
import {render} from "react-dom";
import c from "./Header.module.css"
import logo from "./../../imgs/logo.png"
import cart from "./../../imgs/shopping-cart.svg"
import search from "./../../imgs/search.png"
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth_reducer";
import {Affix, Badge, Button, Col, Image, Input, InputNumber, Row} from "antd";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {getCart, getCartItems, setCartOpened} from "../../redux/cart_reducer";
import Icon, {DeleteOutlined, FileDoneOutlined, HeartOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import Cart from "../Cart/Cart";
import Redirector from "../common/Redirector";
import {getOrder} from "../../redux/order_reducer";
import Checker from "../common/Checker/Checker";
import {clearAllIntervals} from "../common/functions";
import Search from "../Search/Search";
import Cabinet from "../Cabinet/Cabinet";
import {setTheme} from "../../redux/theme_reducer";


const Header = (props) => {



    // const [theme, setTheme] = useState('light');

    const themeToggler = () => {

        props.theme === 'light' ? props.setTheme('dark') : props.setTheme('light')

    }


    const logoutUser = () => {
        console.log('logout')
        props.logOut()
    }

    const [showUnpayedOrder,setShowUnpayedOrder] = useState(false);

    // let order_id = 0;
    // if(props.match.params.id && props.match.params.id !== ''){
    //     order_id = parseInt(props.match.params.id)
    // }

    useEffect(()=>{

        if(props.auth.isAuth){

            if(props.cart === null){
                props.getCart()
                // getCartItems()
            }
            // if(props.cart !== null && props.cartItemsFull === null){
            //     // props.getCart()
            //     props.getCartItems(parseCartItemsIds(props.cart.items))
            // }

            if(props.cartItemsFull !== null && props.cartItemsFull !== undefined){
                // console.log(props.cartItemsFull)
                setCartCount(props.cartItemsFull.length)
            }

            // if(props.order.order === null){
            //     // props.getOrder(order_id)
            // }
            // console.log(props.order.order.status)
        }


    },[props.cartItemsFull,props.cart])

    const [visibleStatus,setVisibleStatus] = useState(false);
    const [blinkingStarted,setBlinkingStarted] = useState(false);

    let blinkingStatus = false;

    const blinking = () => {


        // console.log('visible1')
        // console.log(visible1)
        // console.log(visible1 === false ? true : false)
        // blinkingStatus = (blinkingStatus === false ? true : false);

        setInterval(()=>{
            setVisibleStatus(prev => !prev);
            // console.log('visible2')
            // console.log(visibleStatus)
        },1000)
    }

    useEffect(()=>{
        if(!blinkingStarted){
            setVisibleStatus(true);
            // console.log('blinkingStarted')
            setBlinkingStarted(true)
            blinking();
        }
    },[])

    // setTimeout(()=>{

    // },3000)




    const parseCartItemsIds = (itemsString) => {
        let itemsArrTemp = itemsString.split('||');
        return itemsArrTemp.map((i)=>{
            return i.split('|')[0]
        })
    }

    const UserInfo = () => {
        // const uidLine = 'id: '+props.auth.userID+ <span onClick="">[x]</span>;
        return (props.auth.isAuth && props.auth.temp !== '1')
            ? <>
                <NavLink to={'/cabinet'}>{props.auth.login}</NavLink> <span className={c.logout} onClick={logoutUser} title={t('auth.exit')}>[x]</span>
            </>
            : <NavLink to="/login">[{t('header.login')}]</NavLink>
    }

    const AdminLink = () => {
        return props.auth.al == 7 ? <span className={c.adminLink}><NavLink to='/adminko'>&#9398;</NavLink></span> : '';
    }

    // const [top, setTop] = useState(0);

    const changeLang = () => {
        let l = i18n.language
        if(l === 'ua') i18n.changeLanguage('ru')
        if(l === 'ru') i18n.changeLanguage('ua')
        // if(l === 'en') i18n.changeLanguage('ua')
        console.log(props)

    }
    const { t } = useTranslation();
    const [cartCount,setCartCount] = useState(0);
    // const [cartVisible,setCartVisible] = useState(false);
    // console.log(t)

    const closeCart = () => {
        // setCartVisible(false)
        props.setCartOpened(false)
    }
    const openCart = () => {
        // setCartVisible(true)
        props.setCartOpened(true)
    }

    const parseCartItems = (itemsString) => {
        let itemsArrTemp = itemsString.split('||');
        return itemsArrTemp.map((i)=>{
            return i.split('|')
        })
    }


    const numberChanged = (e) => {
        console.log('changed', e.target.value);
    }

    // const [coun]

    const minusCount = () => {

    }
    const plusCount = () => {

    }

    let MyHalfSvg = () => <svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" className=""
                   viewBox="0 0 1024 1024">
        <path
            d="M16 512c0 273.932 222.066 496 496 496s496-222.068 496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41 0 368 164.622 368 368 0 203.41-164.622 368-368 368z"></path>
    </svg>

    const MyHalfIconFilled = props => <Icon component={MyHalfSvg} {...props} />;

    return (
        <div>
            <Checker/>
            <Redirector/>
            <Affix offsetTop={0}>
                <Row className={c.top_line}>
                    {/*<Col span={3}></Col>*/}
                    <Col span={6}>
                        <div className={c.user}>
                            <UserInfo />
                            <AdminLink/>
                            {/*<Button onClick={clearAllIntervals}>c</Button>*/}
                        </div>
                    </Col>
                    <Col span={1}>
                        <div className={c.search}>
                            <Search />
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={c.lang} onClick={changeLang}>

                            <b>{t('header.lang.main')}</b>{t('header.lang.other')}
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className={c.money} title={t('header.uah_title')}>UAH</div>
                    </Col>
                    <Col span={4}>
                        <Badge className={c.cart} count={cartCount} size='small' onClick={openCart}>
                            <img src={cart} alt=""/>
                        </Badge>
                    </Col>
                    <Col span={1}>
                        <MyHalfIconFilled onClick={themeToggler} title={props.theme === 'light' ? t('header.change_theme_dark') : t('header.change_theme_light') } />

                    </Col>
                    <Col span={2}>
                        {
                            props.order.payingOrder !== null && props.order.payingOrder !== undefined && props.order.payingOrder.status === 'paying' ?
                                <NavLink to={'/pay/'+props.order.payingOrder.id} >
                                    <div className={c.pay + (visibleStatus ? '' : ' ' + c.invisible)}>
                                        <FileDoneOutlined />
                                    </div>
                                </NavLink>
                                : ''
                        }

                    </Col>
                    {/*<Col span={1}></Col>*/}
                </Row>
            </Affix>
            {/*<a href='https://www.instagram.com/__sweet.kids/'><div className={i18n.language === 'ua' ? c.banner_ua : c.banner_ru}>&nbsp;</div></a>*/}
            <div className={c.buttons_line}>
                <div className={c.menu_buttons_container}>
                    <div className={c.menu_buttons}>
                        <NavLink to="/">{t('header.shop')}</NavLink>
                        <a href="https://www.instagram.com/__sweet.kids/">{t('header.insta')}</a>
                        <NavLink to="/delivery_pay">{t('header.delivery_pay')}</NavLink>
                    </div>
                </div>

                <div className={c.logo}>
                    <NavLink to="/">
                        <img src={logo} alt=""/>
                    </NavLink>

                </div>
                <div className={c.menu_buttons_container}>

                    <div className={c.menu_buttons}>
                        <NavLink to="/about">{t('header.about')}</NavLink>
                        <NavLink to="/contacts">{t('header.contacts')}</NavLink>
                        <NavLink to="/faq">{t('header.faq')}</NavLink>
                    </div>
                </div>
            </div>



            <Cart />


        </div>
    )
}

const mstp = (state) => {

    return {
        auth: state.auth,
        cart: state.cart.cart,
        cartOpened: state.cart.cartOpened,
        cartItemsFull: state.cart.cartItemsFull,
        order: state.order,
        theme: state.theme.theme,
    }
};

export default compose(connect(mstp,{logOut,getCart,setCartOpened,getOrder,setTheme}))(Header);