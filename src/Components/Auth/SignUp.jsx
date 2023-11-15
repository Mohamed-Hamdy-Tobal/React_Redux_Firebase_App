import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../../Store/Reducers/authReducer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const userInfo = {email:'', password: '', fname: '', lname: ''}

const SignUp = () => {

    const [user, setUser] = useState(userInfo)
    const dispatch = useDispatch()
    const {currentUser, error} = useSelector(state => state.authRed)
    const navigate = useNavigate()


    // const [myError, setError] = useState()

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(user)
        console.log(error)
        dispatch(signUp(user))

        try {
            await dispatch(signUp(user))
        } catch {
            console.log('Failed To Create Account')
        }

        setUser(userInfo)
    }

    useEffect(() => {
        if (Object.values(currentUser).length > 1 && !error) {
            navigate('/')
        }
    }, [currentUser, navigate, error])

    return (
        <div className="sign-page sec-padd">
            {error && <Alert variant='danger' style={{position: 'absolute',width: '80%',top: '72.75px',left: '50%',transform:' translateX(-50%)'}}>{error}</Alert>}
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