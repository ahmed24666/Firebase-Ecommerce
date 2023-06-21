import React from 'react'
import './../styles/cart.scss'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/CommonSection'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai';
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, deleteItem, removeItem } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <Helmet title='Cart'>
            <CommonSection title='Shopping Cart' />
            <Container className='my-5'>
                <Row>
                    <Col lg='9' className='mb-3'>
                        {
                            cartItems.length === 0 ? <h2 className='fs-4 text-center'>No Items Add</h2> :
                                <table className='table bordered'>
                                    <thead>
                                        <tr>
                                            <th className='image'>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((item, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td className='image'><img src={item.imgUrl} alt="" /></td>
                                                        <td>{item.productName}</td>
                                                        <td>$ {item.price}</td>
                                                        <td className='add'>
                                                            <span className='fs-5' style={{ cursor: 'pointer' }} onClick={() => dispatch(removeItem({
                                                                id: item.id,
                                                                productName: item.productName,
                                                                imgUrl: item.imgUrl,
                                                                price: item.price,
                                                            }))}><AiOutlineMinusCircle /> </span>
                                                            {item.quantity}px
                                                            <span className='fs-5 ' style={{ cursor: 'pointer' }} onClick={() => dispatch(addItem({
                                                                id: item.id,
                                                                productName: item.productName,
                                                                imgUrl: item.imgUrl,
                                                                price: item.price,
                                                            }))}> <AiOutlinePlusCircle /></span>
                                                        </td>
                                                        <motion.td whileTap={{ color: 'red' }} className='delete fs-4' onClick={() => dispatch(deleteItem(item.id))}><AiOutlineDelete /></motion.td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                        }

                    </Col>
                    <Col lg='3'>
                        <div>
                            <h6 className='d-flex align-items-center justify-content-evenly justify-content-lg-between'>Subtotal
                                <span className='fs-4 fw-bold'>$ {totalAmount}</span>
                            </h6>
                        </div>
                        <p className='fs-6 mt-2 text-center text-lg-start'>taxes and shipping will be calculated in the checkout</p>
                        <div>
                            <button className="buy__btn w-100">
                                <Link to='/shop'>Continue Shopping</Link>
                            </button>
                            <Link to='/checkout'>
                                <button className="buy__btn w-100 mt-3">
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    )
}

export default Cart
