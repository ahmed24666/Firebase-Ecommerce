import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/eco-logo.png"
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlinePhone } from 'react-icons/md';
import { BsMailbox } from 'react-icons/bs';

import './footer.scss'
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4' md='6' className='text-center text-lg-start '>
                        <div className="logo d-flex gap-2 align-items-center justify-content-center justify-content-lg-start">
                            <img src={logo} alt="" />
                            <div>
                                <h1>MultiMart</h1>
                            </div>
                        </div>
                        <p className="footer__text mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestiae tenetur voluptate consequatur doloremque eveniet mollitia voluptates quae asperiores quaerat?
                        </p>
                    </Col>
                    <Col lg='3' md='6' className='text-center text-lg-start '>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Top Categories</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0 '>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' md='6' className='text-center text-lg-start '>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Useful Links</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='6' className='text-center text-lg-start '>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contact</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center justify-content-center justify-content-lg-start fs-1'>
                                    <SlLocationPin />
                                    <p className='mb-0 ms-3'>14 Saad ElSayed street, Mansoura ,Dakahlia</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center justify-content-center justify-content-lg-start fs-4'>
                                    <MdOutlinePhone />
                                    <p className='mb-0 ms-3'>+20123456789</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center justify-content-center justify-content-lg-start fs-4'>
                                    <BsMailbox />
                                    <p className='mb-0 ms-3'>trio@gmail.com</p>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12' >
                        <p className="footer__copyright text-center">Copyright {year} developed by Ahmed Osama</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
