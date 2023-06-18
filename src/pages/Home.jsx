import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from './../components/services/Services'
import ProductsList from '../components/Ui/ProductsList'
import products from '../assets/data/products'
import { useEffect } from 'react'
const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSellerProducts, setBestSellerProducts] = useState([])
    useEffect(() => {
        const filteredTrendingProducts=products.filter((item)=>item.category==='chair')
        const filteredBestSellerProducts=products.filter((item)=>item.category==='sofa')
        setTrendingProducts(filteredTrendingProducts)
        setBestSellerProducts(filteredBestSellerProducts)
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
                    <Col lg='12' className='text-center' >
                        <h2 className='section__title'>Trending Products</h2>
                    </Col>
                    <ProductsList data={trendingProducts}/>
                </Row>
            </Container>
        </section>
        <section className="best__sales">
            <Container>
                <Row>
                    <Col lg='12' className='text-center' >
                        <h2 className='section__title'>Best Seller</h2>
                    </Col>
                    <ProductsList data={bestSellerProducts}/>
                </Row>
            </Container>
        </section>
        <section className="timer__count"></section>
    </Helmet>
}

export default Home
