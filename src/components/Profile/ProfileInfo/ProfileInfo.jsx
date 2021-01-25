import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import jobNeed from '../../../assets/images/job_need.png'
import jobNoNeed from '../../../assets/images/job_no_need.png'

function ProfileInfo( props ) {

    if( !props.profile ) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://www.lopesan.com/blog/wp-content/uploads/2019/07/Bavaro-Beach.jpg" alt="React Samurai Course" />
            </div>
            <div className={ classes.descriptionBlock }>
                <div>
                    <img src={ props.profile.photos.large } alt=""/>
                </div>
                <div>
                    <span className={ classes.infoTitle }>Name:</span>
                    { props.profile.fullName }
                </div>
                <div>
                    <span className={ classes.infoTitle }>About:</span>
                    { props.profile.aboutMe }
                </div>
                <hr/>
                <div>
                    <img src={ props.profile.lookingForAJob ? jobNeed : jobNoNeed } alt="" className={ classes.jobNeedImg } />
                    { props.profile.lookingForAJob && props.profile.lookingForAJobDescription }
                </div>
                <hr/>
                <div>
                    <span className={ classes.infoTitle }>Facebook: </span>
                    <a href={ props.profile.contacts.facebook } target="_blank" rel="noopener noreferrer nofollow">{ props.profile.contacts.facebook }</a>
                </div>
                <div>
                    <span className={ classes.infoTitle }>Website: </span>
                    <a href={ props.profile.contacts.website } target="_blank" rel="noopener noreferrer nofollow">{ props.profile.contacts.website }</a>
                </div>
                <div>
                    <span className={ classes.infoTitle }>VK: </span>
                    <a href={ props.profile.contacts.vk } target="_blank" rel="noopener noreferrer nofollow">{ props.profile.contacts.vk }</a>
                </div>
                <div>
                    <span className={ classes.infoTitle }>Twitter: </span>
                    <a href={ props.profile.contacts.twitter } target="_blank" rel="noopener noreferrer nofollow">{ props.profile.contacts.twitter }</a>
                </div>
                <div>
                    <span className={ classes.infoTitle }>Instagram: </span>
                    <a href={ props.profile.contacts.instagram } target="_blank" rel="noopener noreferrer nofollow">{ props.profile.contacts.instagram }</a>
                </div>
                <div>
                    <span className={ classes.infoTitle }>Youtube: </span>
                    <a href={ props.profile.contacts.youtube } target="_blank" rel="noopener noreferrer nofollow">{ props.profile.contacts.youtube }</a>
                </div>
                <div>
                    <span className={ classes.infoTitle }>Github: </span>
                    <a href={ props.profile.contacts.github } target="_blank" rel="noopener noreferrer nofollow">{ props.profile.contacts.github }</a>
                </div>
                <div>
                    <span className={ classes.infoTitle }>Extra: </span>
                    <a href={ props.profile.contacts.mainLink } target="_blank" rel="noopener noreferrer nofollow">{ props.profile.contacts.mainLink }</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
