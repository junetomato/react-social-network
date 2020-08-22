import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

function Profile() {
    return (
        <div>
            <div>
                <img src="https://www.lopesan.com/blog/wp-content/uploads/2019/07/Bavaro-Beach.jpg" alt="React Samurai Course" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile
