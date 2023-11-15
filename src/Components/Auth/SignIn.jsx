import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIN } from '../../Store/Reducers/authReducer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'


const userInfo = {email:'', password: ''}

const SignIn = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState(userInfo)

    const {currentUser, error} = useSelector(state => state.authRed)
    console.log(currentUser)

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
        dispatch(signIN(user))
        console.log(currentUser)
        setUser(userInfo)
    }

    useEffect(() => {
        if (Object.values(currentUser).length > 1) {
            navigate('/')
        }
    }, [currentUser, navigate])

    return (
        <div className="sign-page sec-padd">
            {error && <Alert variant='danger' style={{position: 'absolute',width: '80%',top: '72.75px',left: '50%',transform:' translateX(-50%)'}}>{error}</Alert>}
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