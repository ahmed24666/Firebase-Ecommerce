import React from 'react'
import { motion } from 'framer-motion'
import { Col, Container, Row } from 'react-bootstrap'
import './services.scss'
import serviceData from '../../assets/data/serviceData';
const Services = () => {
    return (
        <section className="services">
            <Container>
                <Row>
                    {
                        serviceData.map((item,i) => {
                            return (
                                <Col lg='3' md='4' key={i} className='gap-3 d-flex justify-content-center'>
                                    <motion.div whileHover={{scale:1.1}} className="service__item" style={{background:item.bg}}>
                                        <span>{item.icon}</span>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.subtitle}</p>
                                        </div>
                                    </motion.div>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </section>
    )
}

export default Services
