import React, {useState,useEffect} from "react"
import {connect} from "react-redux";
// import {setStatus} from "../../redux/profile_reducer";

const ProfileStatusWithHocs = ({status,setStatus}) => { // props

    /*
    * хуки НЕ можна використовувати в умовах і циклах
    * */

    let [editMode,setEditMode] = useState(false); // hook
    let [tempStatus,setTempStatus] = useState(status); // hook

    useEffect( () => { // хук, функція, яка виконується ПІСЛЯ того як відбулось відображення рендерингу
        setStatus(status) // що зробити
    },[status]); // при якій умові - коли змінюється вказаний елемент // якщо умова - порожній масив - [] - то поведінка буде як у componentDidMount

    const toggleEditMode = () => {
        if( editMode === false)
            setEditMode(true);
        else{
            setEditMode(false);
            setStatus(tempStatus);
        }
    }

    const statusOnChange = (e) => {
        setTempStatus( e.currentTarget.value )
    }

    return <div>
        {editMode
            ? <div>
                <input value={tempStatus}  onChange={statusOnChange} autoFocus={true} onBlur={toggleEditMode} />

            </div>
            : <div>
                <span onDoubleClick={toggleEditMode}>{tempStatus === '' ? '[click to change]' : tempStatus}</span>
            </div>
        }
    </div>
}

export default connect()(ProfileStatusWithHocs)