import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <>
            <NavLink to='/signup' className='nav-link'>Sign UP</NavLink>
            <NavLink to='/signin' className='nav-link'>Login</NavLink>
        </>
    )
}

export default SignedInLinks