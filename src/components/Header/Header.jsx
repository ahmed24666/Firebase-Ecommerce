import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './header.scss'
import logo from "../../assets/images/eco-logo.png"
import userIcon from "../../assets/images/user-icon.png"
import { BsHandbag } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { RiMenu5Line } from 'react-icons/ri';
import { motion } from 'framer-motion'

const Header = () => {
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
        <header>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <div>
                                <h1>MultiMart</h1>
                            </div>
                        </div>
                        <div className="navigation">
                            <ul className="menu">
                                {navLinks.map((item,i) => {
                                    return(
                                    <li className="nav__item" key={i}>
                                        <NavLink to={item.path}>{item.display}</NavLink>
                                    </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="nav__icons">
                            <motion.span whileTap={{scale:1.3}} className="fav__icon"><BsHeart />
                            <span className="badge">1</span>
                            </motion.span>
                            <motion.span whileTap={{scale:1.3}} className="cart__icon"><BsHandbag />
                            <span className="badge">1</span>
                            </motion.span>
                            <motion.img whileTap={{scale:1.3}} src={userIcon} alt="" />
                        </div>
                        <div className="mobile__menu">
                            <RiMenu5Line />
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header
