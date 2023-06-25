import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { RiSearch2Line } from 'react-icons/ri';
import { RiNotification3Line } from 'react-icons/ri';
import { RiSettings2Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import useAuth from "./../custom-hook/useAuth";
import './../styles/admin-nav.scss'
import { motion } from 'framer-motion';
const admin__nav=[
    {
        display:'Dashboard',
        path:'/dashboard'
    },
    {
        display:'All Products',
        path:'/dashboard/all-products'
    },
    {
        display:'Add Products',
        path:'/dashboard/add-products'
    },
    {
        display:'Users',
        path:'/dashboard/users'
    },
]
const AdminNav = () => {
    const {currentUser}=useAuth()
    return (
    <>
        <header className="admin__header">
            <div className="admin__nav-top ">
                <Container>
                    <div className="admin__nav-wrapper-top flex-column flex-md-row gap-md-5 gap-3 ">
                        <div className="logo text-white">
                            <Link to='/'>
                            <h2 className='fs-3'>Multimart</h2>
                            </Link>
                        </div>
                        <div className="admin-search-box">
                            <input type="text" placeholder='Search....' />
                            <span><RiSearch2Line/></span>
                        </div>
                        <div className="admin__nav-top-right">
                            <span><RiNotification3Line/></span>
                            <span><RiSettings2Line/></span>
                            <img src={currentUser&&currentUser.photoURL} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </header>
        <section className="admin__menu p-0">
            <Container>
                <Row>
                    <div className="admin__navigation">
                        <ul className=''>
                            {
                                admin__nav.map((item,i)=>{
                                    return(
                                        <motion.li whileTap={{opacity:0.5,borderBottom:'5px solid transparent'}} key={i}>
                                            <NavLink to={item.path}>{item.display}</NavLink>
                                        </motion.li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    </>
    )
}

export default AdminNav
