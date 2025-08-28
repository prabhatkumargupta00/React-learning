import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {

    const {User}= useContext(UserContext)

    if (!User) return <div>Please Login</div>

    return (
        <div>welcome {User.username}</div>
    )
}

export default Profile