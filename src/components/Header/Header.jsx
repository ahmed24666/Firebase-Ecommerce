import React, { useRef, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './header.scss'
import logo from "../../assets/images/eco-logo.png"
import userIcon from "../../assets/images/user-icon.png"
import { BsHandbag } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { RiMenu5Line } from 'react-icons/ri';
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux'

const Header = () => {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const headerRef = useRef(null)

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }
    useEffect(() => {
        stickyHeader()
        return () => window.removeEventListener('scroll', stickyHeader)
    }, [])


    const navLinks = [
        {
            path: '/',
            display: 'Home'
        },
        {
            path: '/shop',
            display: 'Shop'
        },
        {
            path: '/cart',
            display: 'Cart'
        },
    ]
    return (
        <header ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <div>
                                <h1>MultiMart</h1>
                            </div>
                        </div>
                        <div className="navigation" >
                            <ul className="menu">
                                {navLinks.map((item, i) => {
                                    return (
                                        <li className="nav__item" key={i}>
                                            <NavLink to={item.path}>{item.display}</NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="nav__icons">
                            <motion.span whileTap={{ scale: 1.3 }} className="fav__icon"><BsHeart />
                                <span className="badge">1</span>
                            </motion.span>
                            <motion.span whileTap={{ scale: 1.3 }} className="cart__icon"><BsHandbag />
                                <span className="badge">{totalQuantity}</span>
                            </motion.span>
                            <motion.img whileTap={{ scale: 1.3 }} src={userIcon} alt="" />
                            <div className="mobile__menu" onClick={handleShow}>
                                <RiMenu5Line />
                            </div>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>MultiMart</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="navigation-sm" >
                                    <ul className="menu">
                                        {navLinks.map((item, i) => {
                                            return (
                                                <li className="nav__item" onClick={handleClose} key={i}>
                                                    <NavLink to={item.path}>{item.display}</NavLink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header
