import React from 'react'
import { Nav } from 'react-bootstrap'

const SignedInLinks = () => {
    return (
        <>
            <Nav.Link to='/'>New Project</Nav.Link>
            <Nav.Link to='/'>Logout</Nav.Link>
        </>
    )
}

export default SignedInLinks