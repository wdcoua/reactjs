import React, {useEffect, useState} from "react";
import defaultUserPhoto from "../../images/user.png";
import ProfilePhoto from "./ProfilePhoto";
import {Field, reduxForm} from "redux-form";
import {createMyField, Hidden, Input, Radio, Textarea} from "../common/FormsControls/FormsControls";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {checkAuthorization, login} from "../../redux/auth_reducer";
import c from './Profile.module.css';
import {setProfileUpdated, updateProfile} from "../../redux/profile_reducer";
import style from "../Login/Login.module.css";
import {setInitialized} from "../../redux/app_reducer";
// import ProfileEditReduxForm from "./ProfileEditForm";
import ProfileEditForm from "./ProfileEditForm";


/*
 {
    "aboutMe": "я круто чувак 1001%",
    "contacts": {
        facebook: "facebook.com",
        github: "github.com",
        instagram: "instagra.com/sds",
        mainLink: null,
        twitter: "https://twitter.com/@sdf",
        vk: "vk.com/dimych",
        website: null,
        youtube: null
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": 'не ищу',
    "fullName": "samurai d"
}
 */


const ProfileEditReduxForm = reduxForm({
    form: 'profileEdit'
})(ProfileEditForm)

//
// const mapStateToProps = ({profilePage}) => {
//     //debugger
//
//     let co = profilePage.profile.contacts;
//     return {
//         initialValues: {
//             fullName: profilePage.profile.fullName,
//             aboutMe: profilePage.profile.aboutMe,
//             facebook: co.facebook,
//             github: co.github,
//             instagram: co.instagram,
//             mainLink: co.mainLink,
//             twitter: co.twitter,
//             vk: co.vk,
//             website: co.website,
//             youtube: co.youtube,
//             lookingForAJob: profilePage.profile.lookingForAJob ? '1' : '0',
//             lookingForAJobDescription: profilePage.profile.lookingForAJobDescription,
//
//         },
//
//         //capthaImg: props.capthaImg
//     }
// };

const Profile = React.memo((props) => {
    let {profile,status,userID,profileUpdatedToggle} = props;
    let co = profile.contacts;
    let isOwner = (userID === profile.userId);

    // let [isOwner, setIsOwner] = useState(0); // hook
    let [editMode,setEditMode] = useState(false); // hook


    useEffect( () => {
        console.log('new profile');
        console.log(profileUpdatedToggle);

        if(profileUpdatedToggle) {
            toggleEditMode();
            props.setProfileUpdated(false);
        }

    }, [profileUpdatedToggle]); // якщо написати [examples], то скрипт буде бомбити сервер запитами "чи не змінились екзампли"



    const toggleEditMode = () => {
        if( editMode === false)
            setEditMode(true);
        else{
            setEditMode(false);
            //setStatus(tempStatus);
        }
    }


    const onSubmit = (formData) => { //formData
        //
        /*if (props.auth.isAuth === false) {
            props.login(email, pass, rememberMe, captcha)
        } else {
            return <Redirect to={'/index'}/>
        }*/

        let out = {
            "userId": profile.userId,
            "aboutMe": formData.aboutMe,
            "contacts": {
                facebook: formData.facebook,
                github: formData.github,
                instagram: formData.instagram,
                mainLink: formData.mainLink,
                twitter: formData.twitter,
                vk: formData.vk,
                website: formData.website,
                youtube: formData.youtube
            },
            "lookingForAJob": formData.lookingForAJob === '1',
            "lookingForAJobDescription": formData.lookingForAJobDescription,
            "fullName": formData.fullName
        }
        // formData.lookingForAJob = formData.lookingForAJob === '1'
        // console.log(formData)
        //  console.log(out)
         // console.log('test1')
        props.updateProfile(out);
        // console.log('test2')
        // debugger

        //     prom.then(
        //         ()=>{
        //             toggleEditMode();
        //             console.log(prom)
        //
        //         }
        //     );
        // let data = await Promise.all([prom])
        //     .then( () => {
        //         console.log(prom)
        //         toggleEditMode();
        //     })
    }


    // console.log('isOwner - '+isOwner + ' - +' + userID+ '+ - +' + profile.userId+'+')

    return <div>
        {
            /*isOwner ? (
                editMode ? <div>
                    edit form
                    <button onClick={toggleEditMode}>Save</button>
                </div>
                    : <div><button onClick={toggleEditMode}>Edit Profile</button><br/></div>
            ) : ''
*/

            isOwner && editMode
            ? <div>
                    {/*<ProfileEditReduxForm onSubmit={onSubmit} initialValues={profile} {...props} />*/}
                    <ProfileEditReduxForm onSubmit={onSubmit} {...props} />
            </div>
            : <div>
                    {isOwner ? <div><button onClick={toggleEditMode}>Edit Profile</button><br/></div> : ''}
            <img src={profile.photos.large ? profile.photos.large : defaultUserPhoto} alt=""/>
            <div><b>{profile.fullName}</b></div>
                    <div><u>Статус:</u> {status}</div>
            <div><u>Обо мне:</u> "{profile.aboutMe}"</div>
            <div><u>Ищу работу:</u> "{profile.lookingForAJob ? 'Да' : 'Нет'}"<br/>
                {profile.lookingForAJobDescription}
            </div>
                    { // show only if there is at least one contact
                        co.facebook ||
                        co.github ||
                        co.instagram ||
                        co.vk ||
                        co.mainLink ||
                        co.twitter ||
                        co.youtube ||
                        co.website ? <><b>Мои контакты:</b> <br/></> : ''
                    }

                    {Object.keys(co).map((k)=>{
                        return <Contact key={k} contactName={k} contactValue={co[k]}/>
                    })}

                    {/*{co.facebook ? <div><u>FB:</u> {co.facebook}</div> : ''}*/}
                    {/*{co.github ? <div><u>GH:</u> {co.github}</div> : ''}*/}
                    {/*{co.instagram ? <div><u>INST:</u> {co.instagram}</div> : ''}*/}
                    {/*{co.vk ? <div><u>VK:</u> {co.vk}</div> : ''}*/}
                    {/*{co.mainLink ? <div><u>mainLink:</u> {co.mainLink}</div> : ''}*/}
                    {/*{co.twitter ? <div><u>TW:</u> {co.twitter}</div> : ''}*/}
                    {/*{co.youtube ? <div><u>YT:</u> {co.youtube}</div> : ''}*/}
                    {/*{co.website ? <div><u>Site:</u> <a href={co.website}>{co.website}</a></div> : ''}*/}
            </div>
        }

    </div>;
});

const Contact = ({contactName,contactValue}) => {
    return <div><u>{contactName}:</u> {contactValue}</div>
}

/*
Object { gb: {…}, chat: {…}, examples: {…}, users: {…}, profilePage: {…}, auth: {…}, form: {}, app: {…} }

app: Object { initialized: true }

auth: Object { userID: 11583, email: "wd.co.ua@gmail.com", login: "WD8", … }

captchaAnswer: null

capthaImg: null

email: "wd.co.ua@gmail.com"

isAuth: true

login: "WD8"

loginError: null

userID: 11583

userImg: null

<prototype>: Object { … }

chat: Object { chatPosts: (6) […], newChatPostText: "this is Sparta!" }

examples: Object { examplesList: (19) […] }

form: Object {  }

gb: Object { gbPosts: (2) […], newPostText: "hi how are u?))" }

profilePage: Object { profile: {…}, status: "97" }

profile: Object { aboutMe: "Димыч, курсы - агонь!!!", lookingForAJob: false, lookingForAJobDescription: "уже есть", … }

aboutMe: "Димыч, курсы - агонь!!!"

contacts: Object { facebook: "", website: "localhost.com", vk: "", … }

facebook: ""

github: ""

instagram: ""

mainLink: ""

twitter: ""

vk: ""

website: "localhost.com"

youtube: ""

<prototype>: Object { … }

fullName: "WD"

lookingForAJob: false

lookingForAJobDescription: "уже есть"

photos: Object { small: "https://social-network.samuraijs.com/activecontent/images/users/11583/user-small.jpg?v=6", large: "https://social-network.samuraijs.com/activecontent/images/users/11583/user.jpg?v=6" }

userId: 11583

<prototype>: Object { … }

status: "97"

<prototype>: Object { … }

users: Object { usersPerPage: 20, totalUsers: 11974, currentPage: 270, … }

<prototype>: Object { … }


*/

/*

дублюю верхнє



const Profile = React.memo((props) => {
    return <div>
        <img src={props.profile.photos.large} alt=""/>
        <div><b>{props.profile.fullName}</b></div>
        <div>Статус: {props.status}</div>
        <div>Обо мне: "{props.profile.aboutMe}"</div><br/>
        Мои контакты: <br/>
        <div>{props.co.facebook}</div>
        <div>{props.co.github}</div>
        <div>{props.co.instagram}</div>
        <div>{props.co.vk}</div>

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
            <div>{this.props.co.facebook}</div>
            <div>{this.props.co.github}</div>
            <div>{this.props.co.instagram}</div>
            <div>{this.props.co.vk}</div>

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
            <div>{this.props.co.facebook}</div>
            <div>{this.props.co.github}</div>
            <div>{this.props.co.instagram}</div>
            <div>{this.props.co.vk}</div>

        </div>;
    }
}

* */



// export default Profile


const mapStateToProps = ({profilePage}) => {
    //debugger

    let co = profilePage.profile.contacts;
    return {
         initialValues: {
            fullName: profilePage.profile.fullName,
            aboutMe: profilePage.profile.aboutMe,
            facebook: co.facebook,
            github: co.github,
            instagram: co.instagram,
            mainLink: co.mainLink,
            twitter: co.twitter,
            vk: co.vk,
            website: co.website,
            youtube: co.youtube,
            lookingForAJob: profilePage.profile.lookingForAJob ? '1' : '0',
            lookingForAJobDescription: profilePage.profile.lookingForAJobDescription,

         },

        //capthaImg: props.capthaImg
    }
};
/*
"aboutMe": formData.aboutMe,
    "contacts": {
    facebook: formData.facebook,
        github: formData.github,
        instagram: formData.instagram,
        mainLink: formData.mainLink,
        twitter: formData.twitter,
        vk: formData.vk,
        website: formData.website,
        youtube: formData.youtube
},
"lookingForAJob": formData.lookingForAJob === '1',
    "lookingForAJobDescription": formData.lookingForAJobDescription,
    "fullName": formData.fullName*/

export default compose(
    connect(mapStateToProps, {updateProfile,setProfileUpdated}),
)(Profile)
