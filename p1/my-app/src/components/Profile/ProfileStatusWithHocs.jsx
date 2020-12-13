import React, {useState} from "react"
import {connect} from "react-redux";

const ProfileStatusWithHocs = (props) => {

    let [editMode,setEditMode] = useState(false); // hook
    let [tempStatus,setTempStatus] = useState(props.status); // hook

    const toggleEditMode = () => {
        if( editMode === false)
            setEditMode(true);
        else{
            setEditMode(false);
            props.setStatus(tempStatus);
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