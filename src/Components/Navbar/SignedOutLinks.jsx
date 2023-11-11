import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <>
            <NavLink to='/create-project' className='nav-link'>New Project</NavLink>
            <Nav.Link to='/'>Logout</Nav.Link>
        </>
    )
}

export default SignedOutLinks