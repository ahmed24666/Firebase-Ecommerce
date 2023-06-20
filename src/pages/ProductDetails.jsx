import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/CommonSection'
import { RiStarSFill } from 'react-icons/ri';
import { RiStarHalfSFill } from 'react-icons/ri';
import '../styles/product-details.scss'
import { motion } from 'framer-motion'
import ProductList from '../components/Ui/ProductsList'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
const ProductDetails = () => {
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const [rating, setRating] = useState(null)

    const submitHandle = (e) => {
        e.preventDefault()
        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value
        const reviewObj={
            userName:reviewUserName,
            text:reviewUserMsg,
            rating,
        }
        toast.success('Review Submitted')
    }
    const dispatch = useDispatch()
    const { Id } = useParams()
    const product = products.find((item) => item.id === Id)
    const [tab, setTab] = useState('desc')
    const relatedProducts = products.filter((item) => item.category === product.category)
    return (
        <Helmet title={product.productName}>
            <CommonSection title={product.productName} />
            <section className='p-0'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={product.imgUrl} alt="" />
                        </Col>
                        <Col lg='6'>
                            <div className="product__details text-center text-md-start">
                                <h2>{product.productName}</h2>
                                <div className="product__rating d-flex align-items-center gap-5 mb-4 justify-content-md-start justify-content-center">
                                    <div>
                                        <span><RiStarSFill /></span>
                                        <span><RiStarSFill /></span>
                                        <span><RiStarSFill /></span>
                                        <span><RiStarSFill /></span>
                                        <span><RiStarHalfSFill /></span>
                                    </div>
                                    <p className='mb-0'><span>( {product.avgRating} )</span> rating</p>
                                </div>
                                <div className='d-flex align-items-center gap-3 justify-content-md-start justify-content-center'>
                                    <span className='product__price'>${product.price}</span>
                                    <span>Category : {product.category.toUpperCase()}</span>
                                </div>
                                <p className='mt-3'>{product.shortDesc}</p>
                                <motion.button whileTap={{ scale: 1.15 }} className="buy__btn" onClick={() => {
                                    dispatch(addItem({
                                        id: product.id,
                                        productName: product.productName,
                                        image: product.imgUrl,
                                        price: product.price,
                                    }))
                                }}>
                                    Add To Cart
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tap__wrapper d-flex align-items-center gap-5 justify-content-md-start justify-content-center">
                                <h6 className={tab === 'desc' ? 'active__tap' : ''} onClick={() => setTab('desc')}>Description</h6>
                                <h6 className={tab === 'rev' ? 'active__tap' : ''} onClick={() => setTab('rev')}>Reviews ( {product.reviews.length} )</h6>
                            </div>
                            <div className="tab__content mt-5 text-center text-md-start">
                                {tab === 'desc' ? <p >{product.description}</p> :
                                    <div className='product__review'>
                                        <div className="review__wrapper text-center text-md-start">
                                            <ul>
                                                {
                                                    product.reviews?.map((item, i) => {
                                                        return (
                                                            <li key={i} className='mb-4'>
                                                                <h6>John Doe</h6>
                                                                <span>{item.rating} ( rating )</span>
                                                                <p>{item.text}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="review__form text-center text-md-start">
                                                <h4>Leave Your Experience</h4>
                                                <form onSubmit={submitHandle}>
                                                    <div className="form__group">
                                                        <input type="text" placeholder='Enter Name' ref={reviewUser} required />
                                                    </div>
                                                    <div className="form__group d-flex
                                                    align-items-center gap-3 gap-md-5 justify-content-md-start justify-content-center">
                                                        <motion.span whileTap={{scale:1.2}} onClick={() => setRating(1)}>1 <RiStarSFill /></motion.span>
                                                        <motion.span whileTap={{scale:1.2}} onClick={() => setRating(2)}>2 <RiStarSFill /></motion.span>
                                                        <motion.span whileTap={{scale:1.2}} onClick={() => setRating(3)}>3 <RiStarSFill /></motion.span>
                                                        <motion.span whileTap={{scale:1.2}} onClick={() => setRating(4)}>4 <RiStarSFill /></motion.span>
                                                        <motion.span whileTap={{scale:1.2}} onClick={() => setRating(5)}>5 <RiStarSFill /></motion.span>
                                                    </div>
                                                    <div className="form__group">
                                                        <textarea rows={4} type="text" placeholder='Review Message' ref={reviewMsg} required />
                                                    </div>
                                                    <motion.button whileTap={{scale:1.2}} type='submit' className="buy__btn ">Submit</motion.button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>}

                            </div>
                        </Col>
                        <Col lg='12' className='mt-5'>
                            <h2 className="related__title text-center text-md-start">
                                You Might Also Like
                            </h2>
                        </Col>
                        <ProductList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetails
