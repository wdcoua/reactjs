// import React, {Component} from "react";
// import React, {PureComponent} from "react";
import React from "react";




const Profile = React.memo((props) => {
    return <div>
        <img src={props.profile.photos.large} alt=""/>
        <div><b>{props.profile.fullName}</b></div>
        <div>Статус: {props.status}</div>
        <div>Обо мне: "{props.profile.aboutMe}"</div><br/>
        Мои контакты: <br/>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.contacts.instagram}</div>
        <div>{props.profile.contacts.vk}</div>

    </div>;
});

/*

дублюю верхнє



const Profile = React.memo((props) => {
    return <div>
        <img src={props.profile.photos.large} alt=""/>
        <div><b>{props.profile.fullName}</b></div>
        <div>Статус: {props.status}</div>
        <div>Обо мне: "{props.profile.aboutMe}"</div><br/>
        Мои контакты: <br/>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.contacts.instagram}</div>
        <div>{props.profile.contacts.vk}</div>

    </div>;
});


*/

/*
або

class Profile extends PureComponent {

    render() {
        return <div>
            <img src={this.props.profile.photos.large} alt=""/>
            <div><b>{this.props.profile.fullName}</b></div>
            <div>Статус: {this.props.status}</div>
            <div>Обо мне: "{this.props.profile.aboutMe}"</div><br/>
            Мои контакты: <br/>
            <div>{this.props.profile.contacts.facebook}</div>
            <div>{this.props.profile.contacts.github}</div>
            <div>{this.props.profile.contacts.instagram}</div>
            <div>{this.props.profile.contacts.vk}</div>

        </div>;
    }
}

*/


/*

або


class Profile extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state;
    }

    render() {
        return <div>
            <img src={this.props.profile.photos.large} alt=""/>
            <div><b>{this.props.profile.fullName}</b></div>
            <div>Статус: {this.props.status}</div>
            <div>Обо мне: "{this.props.profile.aboutMe}"</div><br/>
            Мои контакты: <br/>
            <div>{this.props.profile.contacts.facebook}</div>
            <div>{this.props.profile.contacts.github}</div>
            <div>{this.props.profile.contacts.instagram}</div>
            <div>{this.props.profile.contacts.vk}</div>

        </div>;
    }
}

* */



export default Profile
