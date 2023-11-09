import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate()

    const error = useRouteError()
    console.log(error)

    return (
        <Container>
            <Row>
                <Col xs={{span: 8, offset: 2}}>
                    <div className='mt-5 text-center'>
                        <h1>Ooops!</h1>
                        <p>Sorry, an unexpected error has occurred</p>
                        <p><i>{error.statusText || error.message}</i></p>
                        <Button variant='danger' className='back' onClick={() => navigate('/', {replace:true})}>Back</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ErrorPage
