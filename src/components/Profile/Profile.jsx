import React from 'react'
// import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile( props ) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={ props.profilePage }
                addPost={ props.addPost }
                updateNewPostText={ props.updateNewPostText }
            />
        </div>
    )
}

export default Profile
