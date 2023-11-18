import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import User from './User'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '../../Store/Reducers/notificationReducer';

export const Header = () => {
    const {currentUser} = useSelector(state => state.authRed)
    const {notiShow} = useSelector((state) => state.notificationsRed);


    const [isToggled, setToggled] = useState(true);

    const dispatch = useDispatch()
    
    const handleToggle = () => {
        setToggled(!isToggled);
    }


    // useEffect(() => {
    //     if (!notiShow) {
    //         // Add the event listener when the component mounts
    //         window.addEventListener('click', () => {dispatch(showNotification())});
    //     }

    // }, [dispatch, notiShow]);

    return (
        <Navbar expand="lg" className="bg-body-tertiary darken-3">
            <Container>
                <Link to='/' className='navbar-logo'>TobalPlan</Link>
                
                <div id="basic-navbar-nav" className={`navbar-collapse ${isToggled?'collapse':''}`} style={{ zIndex: '1000'}}>
                    <Nav className="ms-auto">
                        {/* <SignedOutLinks/>
                        <SignedInLinks/> */}
                        { Object.values(currentUser).length > 1? <SignedOutLinks/>: <SignedInLinks/>}
                    </Nav>
                </div>
                <div className='bag-toggle'>
                    <span className="icon-note" onClick={() => {dispatch(showNotification())}}><FontAwesomeIcon icon={faBell} className={`${notiShow? 'noti-color': ''}`}/></span>
                    <User/>
                    <button onClick={handleToggle} aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" className={`navbar-toggler ${isToggled?'collapsed':''}`}>
                        {isToggled?<FontAwesomeIcon icon={faBars} className='icon-toggler'/>:  <FontAwesomeIcon icon={faTimes} className='icon-toggler'/>}
                    </button>
                </div>
            </Container>
        </Navbar>
    )
}



