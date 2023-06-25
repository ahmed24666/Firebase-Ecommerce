import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/allProducts.scss'
import useGetData from '../custom-hook/useGetData'
import { db } from '../firebase.config'
import { deleteDoc, doc } from '@firebase/firestore'
import { toast } from 'react-toastify'
const AllProducts = () => {
    const { data: productsData } = useGetData('products')
    const { dataLoading } = useGetData('products')

    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, 'products', id))
        toast.error('Deleted Successfully')
    }
    return (
        <section>
            {dataLoading ?
                <div className='d-flex justify-content-center align-items-center'>
                    <div class="chaotic-orbit"></div>
                </div>
                :

                <Container>
                    <Row>
                        <Col lg='12'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productsData.length === 0 ? <tr>
                                        <td >No products to display</td>
                                        <td >-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr> :
                                        productsData.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td><img src={item.imgUrl} alt="" /></td>
                                                    <td >{item.productName}</td>
                                                    <td>{item.category}</td>
                                                    <td>$ {item.price}</td>
                                                    <td><button className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Delete</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            }
        </section>
    )
}

export default AllProducts
