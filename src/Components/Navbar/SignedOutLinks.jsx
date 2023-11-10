import React from 'react'
import { Nav } from 'react-bootstrap'

const SignedOutLinks = () => {
    return (
        <>
            <Nav.Link to='/'>Signup</Nav.Link>
            <Nav.Link to='/'>Login</Nav.Link>
        </>
    )
}

export default SignedOutLinks