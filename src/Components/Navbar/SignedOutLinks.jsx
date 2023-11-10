import React from 'react'
import { Nav } from 'react-bootstrap'

const SignedOutLinks = () => {
    return (
        <>
            <Nav.Link to='/'>New Project</Nav.Link>
            <Nav.Link to='/'>Logout</Nav.Link>
        </>
    )
}

export default SignedOutLinks