import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../../Store/Reducers/authReducer'

const userInfo = {email:'', password: '', fname: '', lname: ''}

const SignUp = () => {

    const [user, setUser] = useState(userInfo)
    const dispatch = useDispatch()

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        dispatch(signUp(user))
        setUser(userInfo)
    }

    return (
        <div className="sign-page sec-padd">
            <div className='container'>
                <form action="" className="white" onSubmit={handleSubmit}>
                    <h5 className="grey-text text-darken-3 page-head">Sign UP</h5>
                    <div className="input-field">
                        <label htmlFor="fname">First Name: </label>
                        <input type="text" name="fname" id="fname" onChange={handleUser} value={user.fname}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lname">Last Name: </label>
                        <input type="text" name="lname" id="lname" onChange={handleUser} value={user.lname}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={handleUser} value={user.email}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" onChange={handleUser} value={user.password}/>
                    </div>
                    <div className="input-field">
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp