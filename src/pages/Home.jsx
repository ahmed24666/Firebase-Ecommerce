import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero-img.png'
import counterImg from '../assets/images/counter-timer-img.png'
import '../styles/home.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from './../components/services/Services'
import ProductsList from '../components/Ui/ProductsList'
import products from '../assets/data/products'
import Clock from '../components/Ui/clock'
import { useEffect } from 'react'
const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSellerProducts, setBestSellerProducts] = useState([])
    const [mobileProducts, setMobileProducts] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])
    useEffect(() => {
        const filteredTrendingProducts=products.filter((item)=>item.category==='chair')
        const filteredBestSellerProducts=products.filter((item)=>item.category==='sofa')
        const filteredMobileProducts=products.filter((item)=>item.category==='mobile')
        const filteredWirelessProducts=products.filter((item)=>item.category==='wireless')
        const filteredPopularProducts=products.filter((item)=>item.category==='watch')
        setTrendingProducts(filteredTrendingProducts)
        setBestSellerProducts(filteredBestSellerProducts)
        setMobileProducts(filteredMobileProducts)
        setWirelessProducts(filteredWirelessProducts)
        setPopularProducts(filteredPopularProducts)
    }, [])
    const year=new Date().getFullYear()
    return <Helmet title={'Home'}>
        <section className='hero__section'>
            <Container>
                <Row>
                    <Col lg='6' md='6' className='text-sm-center text-center text-md-start'>
                        <div className="hero__content">
                            <p className="hero__subtitle">
                                Trending Product in {year}
                            </p>
                            <h2>Make Your Interior More Minimalistic & Modern</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, quasi! Quos maiores aliquid vero incidunt dolorem obcaecati accusantium fugiat inventore.</p>
                            <motion.button whileTap={{scale:1.2}} className="buy__btn">
                                <Link to='/shop'>
                                SHOP NOW
                                </Link>
                            </motion.button>
                        </div>
                    </Col>
                    <Col lg='6' md='6' className='d-flex align-items-center'>
                        <div className="hero__img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Services/>

        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-5' >
                        <h2 className='section__title'>Trending Products</h2>
                    </Col>
                    <ProductsList data={trendingProducts}/>
                </Row>
            </Container>
        </section>
        <section className="best__sales">
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-5' >
                        <h2 className='section__title'>Best Seller</h2>
                    </Col>
                    <ProductsList data={bestSellerProducts}/>
                </Row>
            </Container>
        </section>
        <section className="timer__count">
            <Container>
                <Row>
                    <Col lg='6' md='6' className='text-center'>
                        <div className="clock__top-content">
                            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                        </div>
                        <Clock/>
                        <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn"><Link to='/shop'>Visit store</Link></motion.button>
                    </Col>
                    <Col lg='6' md='6' className='text-md-end text-center '>
                        <img src={counterImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="new__arrivals">
            <Container >
                <Row>
                    <Col lg='12' className='text-center mb-5'>
                        <h2 className="section__title">New Arrivals</h2>
                    </Col>
                    <ProductsList data={mobileProducts}/>
                    {/* <ProductsList data={wirelessProducts}/> */}
                </Row>
            </Container>
        </section>
        <section className="popular__category">
        <Container >
                <Row>
                    <Col lg='12' className='text-center mb-5'>
                        <h2 className="section__title">Popular in Category</h2>
                    </Col>
                    <ProductsList data={popularProducts}/>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Home
