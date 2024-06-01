import React, {useEffect} from "react";
import c from "./ErrorsShower.module.css"
import {setMainError, settingMainError} from "../../redux/app_reducer";

const ErrorsShower = (props) => {
    if (props.mainError !== null && props.mainError !== ''){
        // debugger
        window.setTimeout(()=>{props.settingMainError(null)},10000)
        return <div className={c.errors}>Ошибка:<br/> {props.mainError}</div>
    }
    else
        return ''
}

export default ErrorsShower;