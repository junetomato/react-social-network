import React from 'react'
import s from './Profile.module.css'

function Profile() {
    return (
        <div className="content">
            <div>
                <img src="https://www.lopesan.com/blog/wp-content/uploads/2019/07/Bavaro-Beach.jpg" alt="React Samurai Course" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New post</div>
                <div className='posts'>
                    <div className='item'>post 1</div>
                    <div className='item'>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile
