import React from "react"
import {connect} from "react-redux";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        tempStatusText: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //let a = this.props;
        //let b = this.state;
        //debugger
        if(prevProps.status !== this.props.status){
            this.setState({ // асинхронний, змінює STATE після виконання поточної задачі
                tempStatusText:this.props.status
            })
        }

    }


    /*

        componentDidMount(){
            this.state.tempStatusText = this.props.status;
            this.setState({
                tempStatusText:this.props.status
            })

            console.log(this.state.tempStatusText + ' state2');
            console.log(this.props.status + ' props2');

        }
    */


    toggleEditMode = () =>{
        // debugger
        if(this.state.editMode === true){
            this.setState({ // асинхронний, змінює STATE після виконання поточної задачі
                editMode:false
            })
            this.props.setStatus(this.state.tempStatusText)
            //this.state.editMode = false;
        }else{
            this.setState({
                editMode:true
            })
            //this.state.editMode = true;
            //this.changeStatus
        }

    }

    //newStatus = React.createRef();

    statusOnChange = (e) => {

        this.setState({ // асинхронний, змінює STATE після виконання поточної задачі
            tempStatusText:e.currentTarget.value
        })
    }

    //
    // changeStatus = () => {
    //
    //     let text = this.newStatus.current.value;
    //     this.props.setStatus(text);
    //     this.toggleEditMode();
    // }

    //<input type="button" onClick={this.changeStatus} value="OK"/>

    render() {
        console.log(this.state.tempStatusText + ' state');
        console.log(this.props.status + ' props');
        return <div>
            {this.state.editMode
                ? <div>
                    <input value={this.state.tempStatusText} onChange={this.statusOnChange}  autoFocus={true} onBlur={this.toggleEditMode} />

                </div>
                : <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.props.status === '' ? '[click to change]' : this.props.status}</span>
                    </div>
            }



        </div>
    }


}

export default connect()(ProfileStatus)