import React from 'react'
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/CommonSection'
import '../styles/checkout.scss'
const Checkout = () => {
    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout' />
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className="mb-4 fw-bold text-center text-lg-start">Billing Information</h6>
                            <Form className='billing__form'>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder="Enter your Name" />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="email" placeholder="Enter your Email" />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="number" placeholder="Phone" />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder="Street Address" />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder="City" />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder="Postal Code" />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder="Country" />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg='4'>
                            <div className="checkout__cart">
                                <h6>Total Qty : <span>{totalQty}  Items</span></h6>
                                <h6>Subtotal : <span>$ {totalAmount}</span></h6>
                                <h6><span>Shipping :<br />Free Shipping</span> <span>0</span></h6>                                
                                <h4>Total Cost : <span>$ {totalAmount}</span></h4>
                                <button className="buy__btn auth__btn w-100">Place an order</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout
