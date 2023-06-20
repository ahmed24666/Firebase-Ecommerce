import React from 'react'
import { RiAddLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import './../../styles/productCard.scss'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addItem } from './../../redux/slices/cartSlice'

const ProductCard = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <Col lg='3' md='4'>
            <div className="product__item">
                <Link to={`/shop/${item.id}`}>
                    <div className="product__img">
                        <motion.img whileHover={{ scale: .9 }} src={item.imgUrl} alt="" />
                    </div>
                    <div className="p-2 product__info">
                        <h3 className="product__name">
                            {item.productName}
                        </h3>
                        <span>{item.category}</span>
                    </div>
                </Link>
                <div className="product__card-bottom d-flex justify-content-between p-2 align-items-center">
                    <span className="price">${item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} className='icon' onClick={() => {dispatch(addItem({
                        id: item.id,
                        productName: item.productName,
                        imgUrl: item.imgUrl,
                        price: item.price,
                    }))}}><RiAddLine /></motion.span>
            </div>
            </div>
        </Col >
    )
}

export default ProductCard
