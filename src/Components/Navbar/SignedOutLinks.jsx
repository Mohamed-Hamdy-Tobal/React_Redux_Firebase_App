import React from 'react'
import { Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOut } from '../../Store/Reducers/authReducer'

const SignedOutLinks = () => {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logOut())
    }

    return (
        <>
            <NavLink to='/create-project' className='nav-link'>New Project</NavLink>
            <Nav.Link to='/' onClick={logoutHandler}>Logout</Nav.Link>
        </>
    )
}

export default SignedOutLinks