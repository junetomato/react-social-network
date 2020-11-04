import React from 'react'
import classes from './Users.module.css'

function Users( props ) {

    if( props.users.length === 0 ) {
        props.setUsers([
            { id: 1, photoUrl: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
                followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
                followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
                followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } }
        ])
    }

    return (
        props.users.map( u => <div key={ u.id }>
            <span>
                <div>
                    <img src={ u.photoUrl } alt="" className={ classes.userPhoto }/>
                </div>
                <div>
                    { u.followed
                    ? <button onClick={ () => { props.unfollow( u.id ) } }>unfollow</button>
                    : <button onClick={ () => { props.follow( u.id ) } }>follow</button> }
                </div>
            </span>
            <span>
                <span>
                    <div>{ u.fullName }</div>
                    <div>{ u.status }</div>
                </span>
                <span>
                    <div>{ u.location.country }</div>
                    <div>{ u.location.city }</div>
                </span>
            </span>
        </div> )
    )
}

export default Users
