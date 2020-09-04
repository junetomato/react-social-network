import React from 'react'
import classes from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://www.lopesan.com/blog/wp-content/uploads/2019/07/Bavaro-Beach.jpg" alt="React Samurai Course" />
            </div>
            <div className={ classes.descriptionBlock }>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo
