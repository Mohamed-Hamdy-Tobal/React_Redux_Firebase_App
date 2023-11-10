import React from 'react'
import { Container } from 'react-bootstrap'
import { Notifications } from '../Components/Dashboard/Notifications'
import { ProjectList } from '../Components/Dashboard/ProjectList'

export const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Container>
                <div className="row">
                    <div className="col-lg-6"><ProjectList/></div>
                    <div className="col-lg-6"><Notifications/></div>
                </div>
            </Container>
        </div>
    )
}
