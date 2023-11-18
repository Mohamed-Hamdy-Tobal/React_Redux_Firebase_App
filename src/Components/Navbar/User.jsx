import React from 'react'
import { Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const User = () => {
    const {currentUser} = useSelector(state => state.authRed)
    return (
        <>
            <Nav to='/' className='p-logo btn btn-floating pink lighten-1'>
                {Object.values(currentUser).length > 1 ? currentUser.fname[0].toUpperCase() + currentUser.lname[0].toUpperCase() : '?'}
            </Nav>
        </>
    )
}

export default User