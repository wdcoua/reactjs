import React from "react"
import {connect} from "react-redux";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        tempStatusText: this.props.status
    }

    componentDidMount(){
        this.state.tempStatusText = this.props.status;
        this.setState({
            tempStatusText:this.props.status
        })

        console.log(this.state.tempStatusText + ' state2');
        console.log(this.props.status + ' props2');

    }


    toggleEditMode = () =>{
        // debugger
        if(this.state.editMode === true){
            this.setState({ // асинхронний, змінює STATE після виконання поточної задачі
                editMode:false
            })
            //this.state.editMode = false;
        }else{
            this.setState({
                editMode:true
            })
            //this.state.editMode = true;
        }

    }

    newStatus = React.createRef();

    statusOnChange = () => {

        this.setState({ // асинхронний, змінює STATE після виконання поточної задачі
            tempStatusText:this.newStatus.current.value
        })
    }


    changeStatus = () => {

        let text = this.newStatus.current.value;
        this.props.setStatus(text);
        this.toggleEditMode();
    }

    //onBlur={this.toggleEditMode}

    render() {
        console.log(this.state.tempStatusText + ' state');
        console.log(this.props.status + ' props');
        return <div>
            {this.state.editMode
                ? <div>
                    <input value={this.state.tempStatusText} onChange={this.statusOnChange} ref={this.newStatus}  autoFocus={true} />
                    <input type="button" onClick={this.changeStatus} value="OK"/>
                </div>
                : <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.state.tempStatusText}</span>
                    </div>
            }



        </div>
    }


}

export default connect()(ProfileStatus)