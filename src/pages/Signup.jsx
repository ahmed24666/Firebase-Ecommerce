import React, { useState } from 'react'
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import './../styles/login.scss'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore'
import { auth, storage, db } from './../firebase.config.js'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { toast } from 'react-toastify'
import { uploadBytes } from 'firebase/storage'

const Signup = () => {
    const [email, setemail] = useState('')
    const [file, setfile] = useState('')
    const [password, setpassword] = useState('')
    const [username, setusername] = useState(null)
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const signup = async (e) => {
        e.preventDefault()
        setloading(true)
        const storageRef = ref(storage, `images/${Date.now() + username}`)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = await userCredential.user
            await uploadBytes(storageRef, file);
            toast.success('Image Upload');
            const downloadURL = await getDownloadURL(storageRef);
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName: username,
                email,
                photoURL: downloadURL
            });
            // update User Profile 
            await updateProfile(user, {
                displayName: username,
                photoURL: downloadURL,
            });
            setloading(false)
            toast.success('Account Created')
            navigate('/login')
            // // const storageRef = firebase.storage().ref('rainbow_photos/' + username);
            // const uploadTask = uploadBytesResumable(storageRef, file)
            // uploadTask.on((error) => {
            //     toast.error(error.message)
            // }, () => {
            //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //         // store user data in firestore database
            //         await setDoc(doc(db, "users", user.uid),{
            //             uid:user.uid,
            //             displayName:username,
            //             email,
            //             photoURL:downloadURL
            //         });
            //         // update User Profile 
            //         await updateProfile(user, {
            //             displayName: username,
            //             photoURL: downloadURL,
            //         });
            //     })
            // })
        } catch (error) {
            setloading(false)
            toast.error('something went wrong')
        }
    }
    return (
        <Helmet title='Signup'>
            <section>
                <Container >
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className="fw-bold fs-4 mb-4">Signup</h3>
                            <Form className='auth__form' onSubmit={signup}>
                                <FormGroup classnName='form__group'>
                                    <input type="text" placeholder='Username' onChange={(e) => setusername(e.target.value)} />
                                </FormGroup>
                                <FormGroup classnName='form__group'>
                                    <input type="email" placeholder='Enter Your Email' onChange={(e) => setemail(e.target.value)} />
                                </FormGroup>
                                <FormGroup classnName='form__group'>
                                    <input type="password" placeholder='Enter Your Password' onChange={(e) => setpassword(e.target.value)} />
                                </FormGroup>
                                <FormGroup classnName='form__group'>
                                    <input type="file" placeholder='Enter Your Password' onChange={(e) => setfile(e.target.files[0])} />
                                </FormGroup>
                                <button type='submit' className="buy__btn auth__btn">Create an account
                                {
                                    loading&&(
                                        <span >
                                            <svg aria-hidden="true" role="status" class="animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    )
                                }
                                </button>
                                <p>Already have an account ? <Link to='/login' >Login</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup
