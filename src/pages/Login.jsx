import React, { useState } from 'react'
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import './../styles/login.scss'
const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    return (
        <Helmet title='Login'>
            <section>
                <Container >
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className="fw-bold fs-4 mb-4">Login</h3>
                            <Form className='auth__form'>
                                <FormGroup classnName='form__group'>
                                    <input type="email" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)}/>
                                </FormGroup>
                                <FormGroup classnName='form__group'>
                                    <input type="password" placeholder='Enter Your Password' onChange={(e)=>setpassword(e.target.value)}/>
                                </FormGroup>
                                <button type='submit' className="buy__btn auth__btn">Login</button>
                                <p>Don't have an account ? <Link to='/signup' >Create an account</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login
