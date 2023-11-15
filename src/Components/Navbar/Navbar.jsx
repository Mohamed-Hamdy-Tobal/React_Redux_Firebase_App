import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import User from './User'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {

    const [isToggled, setToggled] = useState(true);
    
    const handleToggle = () => {
        setToggled(!isToggled);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary darken-3">
            <Container>
                <Link to='/' className='navbar-logo'>TobalPlan</Link>
                
                <div id="basic-navbar-nav" className={`navbar-collapse ${isToggled?'collapse':''}`} style={{ zIndex: '1000'}}>
                    <Nav className="ms-auto">
                        <SignedOutLinks/>
                        <SignedInLinks/>
                    </Nav>
                </div>
                <div className='bag-toggle'>
                    <User/>
                    <button onClick={handleToggle} aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" className={`navbar-toggler ${isToggled?'collapsed':''}`}>
                        {isToggled?<FontAwesomeIcon icon={faBars} className='icon-toggler'/>:  <FontAwesomeIcon icon={faTimes} className='icon-toggler'/>}
                    </button>
                </div>
            </Container>
        </Navbar>
    )
}



// import React from 'react'
// import { Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'

// export const Header = () => {
//     return (
//         <nav className="nav-wrapper grey darken-3">
//             <Container className='container-fluid'>
//                 <Link to='/' className='navbar-brand' style={{ fontSize: '30px',fontWeight: '600',letterSpacing: '-1px'}}>TobalPlan</Link>
//                 <SignedInLinks/>
//                 <SignedOutLinks/>
//             </Container>
//         </nav>
//     )
// }




