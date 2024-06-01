import React, {useEffect, useState} from "react";
// import {render} from "react-dom";
import c from "./Index.module.css"
// import logo from "./../../imgs/logo.png"
// import cart from "./../../imgs/cart.png"
// import item1 from "./../../imgs/items/item1.jpg"
// import item2 from "./../../imgs/items/item2.jpg"
// import item3 from "./../../imgs/items/item3.jpg"
// import item4 from "./../../imgs/items/item4.jpg"
// import item5 from "./../../imgs/items/item5.jpg"
// import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getCatListMain,
    getItemListMain,
    getMoreItems,
    setSearchString,
    setSelectedCats,
    setSortBy
} from "../../redux/index_reducer";
import {CheckBox, createMyField} from "../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import Preloader from "../Preloader/Preloader";
import {Button, Card, Layout, Menu} from "antd";
import Meta from "antd/lib/card/Meta";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
// import {MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

// import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined, CheckOutlined,
} from '@ant-design/icons';


const { SubMenu } = Menu;
const { Sider, Content } = Layout;

const FilterCatsForm = ({cats,catsChecked,setCatsChecked,getItemListMain,setCollapsedTrue,collapsed,
                            setCollapsed,
                            toggleCollapsed,setSelectedCats}) => {

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
        // console.log(catsChecked.join())
        setSelectedCats(catsChecked.join())
        getItemListMain(20,0);
    }



    return <form >


            <Button type="primary" onClick={toggleCollapsed} className={c.categories_btn} style={{ marginBottom: 16 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
        <div className={c.categories_list_back +' '+ (collapsed ? c.categories_list_back_hidden : null)} onClick={setCollapsedTrue} >

        </div>
            <Menu
                className={c.categories_list}
                mode="inline"
                inlineCollapsed={collapsed}
                defaultOpenKeys={['sub1']}

            >

                {/*<SubMenu key="sub1" icon={<CheckOutlined />}*/}
                {/*         title='Категорії'*/}
                {/*         onClick={toggleCollapsed}*/}
                {/*         >*/}
                    {cats.map((cat)=>{

                        return  <>
                            {cat.active === '1' && ( cat.name === '***** interval *****'
                                    ? <div key={cat.id} className={c.interval}>&nbsp;</div>
                                    : <Menu.Item key={cat.id}>
                                    {createMyField(null,CheckBox,'cats['+cat.id+']',[],{onClick:combineCheckedCats,cat_id:cat.id},i18n.language === 'ua' ? cat.name : cat.name_ru)}
                                </Menu.Item>
                                // <label><input type='checkbox' name={'cats['+cat.id+']'} /> {cat.name}</label>
                            )
                            }

                        </>
                    })}

                {/*</SubMenu>*/}
            </Menu>


        {/*{cats.map((cat)=>{
            return <div key={cat.id}>
                {cat.active === '1' && ( cat.name === '***** interval *****' ? <div>&nbsp;</div> :

                        createMyField(null,CheckBox,'cats['+cat.id+']',[],{onClick:combineCheckedCats,cat_id:cat.id},i18n.language === 'ua' ? cat.name : cat.name_ru)

                        // <label><input type='checkbox' name={'cats['+cat.id+']'} /> {cat.name}</label>
                )
                }

            </div>
        })}*/}
    </form>
}

const FilterCatsFormRedux = reduxForm({
    form: 'FilterCatsForm'
})(FilterCatsForm);

// const wsChannel = new WebSocket('wss://sweetkids.site/api/socket.php');

const Index = (props) => {

    const { t } = useTranslation();
    let catsCheckedArr = [];
    const [catsChecked,setCatsChecked] = useState(catsCheckedArr);

    const OnClick = (e) => {
        // console.log('e')
        // console.log(e)
    }
    // const testWS = () => {
    //     wsChannel.send('rr')
    //
    // }

    let sortByObj = {}

    useEffect(()=>{
        if(props.cats === null){
            props.getCatListMain()
        }
        if(props.items === null){
            props.getItemListMain(20,0)
        }


    },[])

    // useEffect(()=>{
    //     console.log(wsChannel)
    //
    // },[])

    // wsChannel.onmessage = response => {
    //     let r = JSON.parse(response.data)
    //     console.log(r)
    // }
    let [collapsed,setCollapsed] = useState(false);


    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        console.log(collapsed)
    };
    const setCollapsedTrue = () => {
        if(!collapsed)
            setCollapsed(true);
    };

    const getMoreItems = () => {
        props.getMoreItems()
    }
    const clearSearchString = () => {
        props.setSearchString('')
        props.getItemListMain(20,0);

    }
    const [sortBySizeStatus,setSBSS] = useState(0);
    const sortBySize = () => {
        let curSBSS = 'off';
        if(sortBySizeStatus === 0){
            setSBSS(1)
            curSBSS = 'desc'
            // console.log(1)
        }
        if(sortBySizeStatus === 1){
            setSBSS(2)
            curSBSS = 'asc'
            // console.log(2)
        }
        if(sortBySizeStatus === 2){
            setSBSS(0)
            curSBSS = 'off'
            // console.log(0)
        }
        // console.log(sortBySizeStatus)
        // console.log(curSBSS)
        if(props.sortBy !== null){
            sortByObj = props.sortBy
        }
        sortByObj.size = curSBSS
        props.setSortBy(sortByObj)
        props.getItemListMain(20,0);
    }
    const [sortByModaStatus,setSBMS] = useState(0);
    const sortByModa = () => {
        let curSBMS = 'off';
        if(sortByModaStatus === 0){
            setSBMS(1)
            curSBMS = 'desc'
            // console.log(1)
        }
        if(sortByModaStatus === 1){
            setSBMS(2)
            curSBMS = 'asc'
            // console.log(2)
        }
        if(sortByModaStatus === 2){
            setSBMS(0)
            curSBMS = 'off'
            // console.log(0)
        }
        // console.log(sortBySizeStatus)
        // console.log(curSBMS)
        if(props.sortBy !== null){
            sortByObj = props.sortBy
        }
        sortByObj.moda = curSBMS
        props.setSortBy(sortByObj)
        props.getItemListMain(20,0);
    }
    const [sortByPriceStatus,setSBPS] = useState(0);
    const sortByPrice = () => {
        let curSBPS = 'off';
        if(sortByPriceStatus === 0){
            setSBPS(1)
            curSBPS = 'desc'
            // console.log(1)
        }
        if(sortByPriceStatus === 1){
            setSBPS(2)
            curSBPS = 'asc'
            // console.log(2)
        }
        if(sortByPriceStatus === 2){
            setSBPS(0)
            curSBPS = 'off'
            // console.log(0)
        }
        // console.log(sortBySizeStatus)
        // console.log(curSBPS)
        if(props.sortBy !== null){
            sortByObj = props.sortBy
        }
        sortByObj.price = curSBPS
        props.setSortBy(sortByObj)
        props.getItemListMain(20,0);
    }
    const [sortByHeightStatus,setSBHS] = useState(0);
    const sortByHeight = () => {
        let curSBHS = 'off';
        if(sortByHeightStatus === 0){
            setSBHS(1)
            curSBHS = 'desc'
            // console.log(1)
        }
        if(sortByHeightStatus === 1){
            setSBHS(2)
            curSBHS = 'asc'
            // console.log(2)
        }
        if(sortByHeightStatus === 2){
            setSBHS(0)
            curSBHS = 'off'
            // console.log(0)
        }
        // console.log(sortBySizeStatus)
        // console.log(curSBHS)
        if(props.sortBy !== null){
            sortByObj = props.sortBy
        }
        sortByObj.height = curSBHS
        props.setSortBy(sortByObj)
        props.getItemListMain(20,0);
    }
    const [sortByAgeStatus,setSBAS] = useState(0);
    const sortByAge = () => {
        let curSBAS = 'off';
        if(sortByAgeStatus === 0){
            setSBAS(1)
            curSBAS = 'desc'
            // console.log(1)
        }
        if(sortByAgeStatus === 1){
            setSBAS(2)
            curSBAS = 'asc'
            // console.log(2)
        }
        if(sortByAgeStatus === 2){
            setSBAS(0)
            curSBAS = 'off'
            // console.log(0)
        }
        // console.log(sortBySizeStatus)
        // console.log(curSBAS)
        if(props.sortBy !== null){
            sortByObj = props.sortBy
        }
        sortByObj.age = curSBAS
        props.setSortBy(sortByObj)
        props.getItemListMain(20,0);
    }

    const get_sort_button_color = (number) => {
        if(number === 0)
            return c.sort_button_color_0
        if(number === 1)
            return c.sort_button_color_1
        if(number === 2)
            return c.sort_button_color_2

    }

    return ( (props.cats === null || props.items === null || props.items === undefined) ? <Preloader  comment='loading 4'/> :
        <div className={c.mainpart} >
            <div className={c.top_filters}>
                {t("index.sort_by")}:
                <span className={c.sort_button + ' ' + get_sort_button_color(sortBySizeStatus)} onClick={sortBySize}>{t("index.sort_by_size")}</span>
                <span className={c.sort_button + ' ' + get_sort_button_color(sortByModaStatus)} onClick={sortByModa}>{t("index.sort_by_moda")}</span>
                <span className={c.sort_button + ' ' + get_sort_button_color(sortByPriceStatus)} onClick={sortByPrice}>{t("index.sort_by_price")}</span>
                <span className={c.sort_button + ' ' + get_sort_button_color(sortByHeightStatus)} onClick={sortByHeight}>{t("index.sort_by_height")}</span>
                <span className={c.sort_button + ' ' + get_sort_button_color(sortByAgeStatus)} onClick={sortByAge}>{t("index.sort_by_age")}</span>
                {/*<span onClick={testWS}>fff</span>*/}
            </div>
            <div className={c.search_results_header +
            (props.searchString === '' ? ' '+c.search_results_header_invisible : '')}>
                {t("index.search_results_header")}:
                <span className={c.search_phrase}> {props.searchString} </span>
                <span className={c.clearSearchStringX} title={t('index.clear_search')} onClick={clearSearchString}>X</span>
            </div>
            <div className={c.main_container}>

                <div>
                    <div className={c.left_filters}>
                    <div className={c.form_container}>
                        <FilterCatsFormRedux
                            onSubmit={OnClick}
                            cats={props.cats}

                            catsChecked={catsChecked}
                            setCatsChecked={setCatsChecked}
                            getItemListMain={props.getItemListMain}
                            collapsed={collapsed}
                            setCollapsed={setCollapsed}
                            toggleCollapsed={toggleCollapsed}
                            setCollapsedTrue={setCollapsedTrue}
                            setSelectedCats={props.setSelectedCats}
                        />
                        {/*
                        <input type="radio" name='sex' value='boy'/> Хлопчик <br/>
                        <input type="radio" name='sex' value='girl'/> Дівчинка <br/>
                        <br/>

                        <input type="radio" name='age' value='0'/> 0-6 міс <br/>
                        <input type="radio" name='age' value='1'/> 6-12 міс <br/>
                        <input type="radio" name='age' value='2'/> 12-18 міс <br/>
                        <input type="radio" name='age' value='3'/> 18-24 міс <br/>
                        <input type="radio" name='age' value='4'/> 24-36 міс <br/>
                        <input type="radio" name='age' value='5'/> 3-5 років <br/>
                        <input type="radio" name='age' value='6'/> 5-8 років <br/>
                        <br/>


                        <input type="radio" name='brand' value='disney'/> Disney <br/>
                        <input type="radio" name='brand' value='nikolodeon'/> Nikolodeon <br/>
                        <input type="radio" name='brand' value='coolclub'/> Cool Club <br/>
                        <input type="radio" name='brand' value='despme'/> Despicable Me <br/>
                        <br/>


                        <input type="radio" name='part' value='top'/> Кофточка <br/>
                        <input type="radio" name='part' value='bottom'/> Штани <br/>
                        <input type="radio" name='part' value='shoes'/> Взуття <br/>
                        <input type="radio" name='part' value='hats'/> Шапочки <br/>
                        <input type="radio" name='part' value='ax'/> Аксесуари <br/>
                        <br/>*/}

                    </div>
                </div>
                </div>
                <Content>
                    <div className={c.main_body}>
                        <div className={c.items_container}>
                            {props.items.length > 0 ?
                                <>
                                    {
                                        props.items.map((item)=>{

                                            let availableCount = parseInt(item.count) - parseInt(item.booked);

                                            // console.log(item);
                                            const imgs = item.photo.split(',');
                                            if (availableCount > 0) {
                                                return <NavLink to={'/item/'+item.id} key={item.id}>
                                                    <Card
                                                        style={{ width: 200 }}
                                                        cover={
                                                            <img
                                                                alt="example"
                                                                src={'https://sweetkids.site/imgs/'+imgs[0]}
                                                                title={item.name}
                                                            />

                                                        }
                                                        // actions={[
                                                        //     <SettingOutlined key="setting" />,
                                                        //     <EditOutlined key="edit" />,
                                                        //     <EllipsisOutlined key="ellipsis" />,
                                                        // ]}
                                                    >
                                                        <Meta
                                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                                            // title={item.name}
                                                            description={i18n.language === 'ua' ? item.name : item.name_ru}
                                                        />
                                                        <div className={c.prices_container}>
                                                            {(item.old_price_active === '1' && item.old_price !== '0')
                                                                ? <div className={c.old_price} title={'-' + item.discount_percent + ' % (-' + item.discount_money + ' ₴)'}>
                                                                    {item.old_price} ₴
                                                                </div>
                                                                : <div>&nbsp;</div>}
                                                            <div className={c.price + ' ' + ((item.old_price_active === '1' && item.old_price !== '0')
                                                                ? c.price_discount
                                                                : null) } >
                                                                {item.price} <span className={c.currency} title={'UAH - ' + t('index.ukr_hryvnya')}>₴</span>
                                                            </div>
                                                        </div>

                                                        {/*<div className={c.buyButton}>*/}
                                                        {/*    <Button type="primary">*/}
                                                        {/*        В корзину*/}
                                                        {/*    </Button>*/}
                                                        {/*</div>*/}



                                                    </Card></NavLink>
                                            }


                                            // <div className={c.item} key={item.id}>
                                            //     <img src={'https://sweetkids.site/imgs/'+imgs[0]} alt=""/>
                                            //     <div className={c.text}>{item.name}</div>
                                            // </div>

                                        })}

                                </>
                            : <div className={c.not_found}>
                                    {t("index.no_items")}
                                </div>}
                            {/*
                        <div className={c.item}>
                            <img src={item1} alt=""/>
                            <div className={c.text}>тестовий опис</div>
                        </div>
                        <div className={c.item}>
                            <img src={item2} alt=""/>
                            <div className={c.text}>тестовий опис</div>
                        </div>
                        <div className={c.item}>
                            <img src={item3} alt=""/>
                            <div className={c.text}>тестовий опис</div>
                        </div>
                        <div className={c.item}>
                            <img src={item4} alt=""/>
                            <div className={c.text}>тестовий опис</div>
                        </div>
                        <div className={c.item}>
                            <img src={item5} alt=""/>
                            <div className={c.text}>тестовий опис</div>
                        </div>*/}
                        </div>
                        {(props.itemsTotal - props.countItems) >= 20 ?
                            <div className={c.load_more}>
                                <Button type='link' onClick={getMoreItems}>{t('index.load_more')} 20</Button>
                            </div>
                            : (0 < (props.itemsTotal - props.countItems) && (props.itemsTotal - props.countItems) < 20) ?
                                <div className={c.load_more}>
                                    <Button type='link' onClick={getMoreItems}>{t('index.load_more')} {props.itemsTotal - props.countItems}</Button>
                                </div>
                                : ''
                        }

                    </div>
                </Content>


            </div>




        </div>
    )
}

const mstp = (state) => {
    return {
        cats: state.index.catList,
        items: state.index.itemList,
        itemsTotal:state.index.itemsTotal,
        countItems:state.index.countItems,
        searchString:state.index.searchString,
        sortBy: state.index.sortBy,
        selectedCats: state.index.selectedCats
    }

}

export default compose(connect(mstp,{getItemListMain,getCatListMain,getMoreItems,setSearchString,setSortBy,setSelectedCats}))(Index);