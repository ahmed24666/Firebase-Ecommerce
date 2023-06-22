import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import useGetData from '../custom-hook/useGetData'
import { db } from '../firebase.config'
import '../styles/allProducts.scss'

const Users = () => {
    const { data: usersData } = useGetData('users')
    const { dataLoading } = useGetData('users')

    const deleteUser = async (id) => {
        await deleteDoc(doc(db, 'users', id))
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
                            <h4 className="fw-bold">Users</h4>
                        </Col>
                        <Col lg='12' className='pt-5'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        usersData.map((item) => {
                                            return (
                                                <tr key={item.uid}>
                                                    <td><img src={item.photoURL} alt="" /></td>
                                                    <td >{item.displayName}</td>
                                                    <td>{item.email}</td>
                                                    <td><button className="btn btn-danger" onClick={() => deleteUser(item.uid)}>Delete</button></td>
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

export default Users
