import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

export const Header = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <Container className='container-fluid'>
                <Link to='/' className='navbar-brand' style={{ fontSize: '30px',fontWeight: '600',letterSpacing: '-1px'}}>TobalPlan</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </Container>
        </nav>
    )
}



