import React, { useState } from 'react'
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import './../styles/addProduct.scss'
import { toast } from 'react-toastify'
import { storage, db } from './../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { collection, addDoc } from '@firebase/firestore'
import { uploadBytes } from 'firebase/storage'
import { useNavigate } from 'react-router'

const AddProducts = () => {
    const [entertitle, setentertitle] = useState('')
    const [enterShortdesc, setenterShortdesc] = useState('')
    const [enterDescription, setenterDescription] = useState('')
    const [enterCategory, setenterCategory] = useState('')
    const [enterPrice, setenterPrice] = useState('')
    const [enterProductImg, setenterProductImg] = useState(null)
    const [loading, setloading] = useState(false)
    const navigate=useNavigate()
    const addProduct = async (e) => {
        e.preventDefault()
        setloading(true)

        // const product = {
        //     title: entertitle,
        //     shortDesc: enterShortdesc,
        //     description: enterDescription,
        //     category: enterCategory,
        //     price: enterPrice,
        //     imgUrl: enterProductImg,
        // }
        // add product to firebase db

        try {
            const docRef = await collection(db, 'products')
            const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)
            await uploadBytes(storageRef, enterProductImg).catch((err) => toast.error('Images not uploaded'));
            toast.success('Image Upload');
            const downloadURL = await getDownloadURL(storageRef);
            await addDoc(docRef, {
                productName: entertitle,
                shortDesc: enterShortdesc,
                description: enterDescription,
                category: enterCategory,
                price: enterPrice,
                imgUrl: downloadURL,
            });
            toast.success('Product successfully added !!')
            setloading(false)
            navigate('/dashboard/all-products')
        } catch (error) {
            toast.error('Something went wrong')
            setloading(false)

        }

        // console.log(product)
    }
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h4 className='mb-5 text-center text-md-center'>Add Product</h4>
                        <Form onSubmit={addProduct}>
                            <FormGroup className='form__group text-center text-md-center'>
                                <span >Product title</span>
                                <input type="text" placeholder='Double sofa ....' onChange={(e) => setentertitle(e.target.value)} required />
                            </FormGroup>
                            <FormGroup className='form__group text-center text-md-center'>
                                <span >Short description</span>
                                <input type="text" placeholder='lorem ....' onChange={(e) => setenterShortdesc(e.target.value)} required />
                            </FormGroup>
                            <FormGroup className='form__group text-center text-md-center'>
                                <span >Description</span>
                                <input type="text" placeholder='Description ....' onChange={(e) => setenterDescription(e.target.value)} required />
                            </FormGroup>
                            <div className='d-flex justify-content-between align-items-center gap-5'>
                                <FormGroup className='form__group text-center text-md-center d-flex justify-content-center flex-column w-50 '>
                                    <span >Price</span>
                                    <input type="number" placeholder='$1000' className='mb-0' onChange={(e) => setenterPrice(e.target.value)} required />
                                </FormGroup>
                                <FormGroup className='form__group text-center text-md-center d-flex justify-content-center flex-column w-50 '>
                                    <span >Category</span>
                                    <select className='p-2 bg-transparent' onChange={(e) => setenterCategory(e.target.value)} required >
                                        <option>Select Category</option>
                                        <option className='text-capitalize' value="chair">chair</option>
                                        <option className='text-capitalize' value="sofa">sofa</option>
                                        <option className='text-capitalize' value="mobile">mobile</option>
                                        <option className='text-capitalize' value="watch">watch</option>
                                        <option className='text-capitalize' value="wireless">wireless</option>
                                    </select>
                                </FormGroup>
                            </div>
                            <div>
                                <FormGroup className='form__group text-center text-md-center d-flex flex-column align-items-center mt-3'>
                                    <span >Product Image</span>
                                    <label class="custum-file-upload" for="file">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
                                        </div>
                                        <div class="text">
                                            <span>Click to upload image</span>
                                        </div>
                                        <input type="file" id="file" onChange={(e) => setenterProductImg(e.target.files[0])} required />
                                    </label>
                                </FormGroup>
                            </div>
                            <div className="text-center">
                                <button type='submit' className="buy__btn">Add Product
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
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AddProducts
