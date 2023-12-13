import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIN } from '../../Store/Reducers/authReducer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
// import Loading from '../../Components/Loading'


const userInfo = {email:'', password: ''}

const SignIn = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState(userInfo)

    const {currentUser, error, loading} = useSelector(state => state.authRed)
    const dispatch = useDispatch()

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signIN(user))
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
                <h4 className='hint' style={{color: '#444', marginBottom: '12px'}}>Please log in to join our plane, or Sign Up</h4>
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
                        <button className='btn btn-primary' disabled={loading}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn