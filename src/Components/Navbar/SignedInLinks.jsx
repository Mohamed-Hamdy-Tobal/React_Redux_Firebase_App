import React from 'react'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <>
            <Link to='/signup' className='nav-link'>Sign UP</Link>
            <Link to='/signin' className='nav-link'>Login</Link>
        </>
    )
}

export default SignedInLinks