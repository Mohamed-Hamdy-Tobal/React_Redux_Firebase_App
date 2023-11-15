import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIN } from '../../Store/Reducers/authReducer'

const userInfo = {email:'', password: ''}

const SignIn = () => {

    const dispatch = useDispatch()

    const [user, setUser] = useState(userInfo)

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        dispatch(signIN(user))
        setUser(userInfo)
    }

    return (
        <div className="sign-page sec-padd">
            <div className='container'>
                <form action="" className="white" onSubmit={handleSubmit}>
                    <h5 className="grey-text text-darken-3 page-head">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={handleUser} value={user.email}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" onChange={handleUser} value={user.password}/>
                    </div>
                    <div className="input-field">
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn