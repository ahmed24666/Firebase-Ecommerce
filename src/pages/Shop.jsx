import React, { useEffect } from 'react'
import './../styles/shop.scss'
import { Col, Container, Row } from 'react-bootstrap'
import CommonSection from '../components/Ui/CommonSection'
import Helmet from './../components/Helmet/Helmet'
import { RiSearch2Line } from 'react-icons/ri';
import { useState } from 'react'
import useGetData from '../custom-hook/useGetData'
// import products from '../assets/data/products'
import ProductList from '../components/Ui/ProductsList'
const Shop = () => {
    const { data: products } = useGetData('products')
    const { dataLoading } = useGetData('products')
    const [productData, setProductData] = useState(products)
    const [filteSelect, setfilteSelect] = useState('all')
    useEffect(() => {

        !dataLoading&&setProductData(products)
    }, [products])
    const handleFilter=(e)=>{
        const filterValue=e.target.value
        if(filterValue==='sofa'){
            const filteredProducts =products.filter((item)=>item.category==='sofa')
            setProductData(filteredProducts)
        }
        else if(filterValue==='mobile'){
            const filteredProducts =products.filter((item)=>item.category==='mobile')
            setProductData(filteredProducts)
        }
        else if(filterValue==='chair'){
            const filteredProducts =products.filter((item)=>item.category==='chair')
            setProductData(filteredProducts)
        }
        else if(filterValue==='watch'){
            const filteredProducts =products.filter((item)=>item.category==='watch')
            setProductData(filteredProducts)
        }
        else if(filterValue==='wireless'){
            const filteredProducts =products.filter((item)=>item.category==='wireless')
            setProductData(filteredProducts)
        }
        else{
            setProductData(products)
        }
    }
    const handleSearch=(e)=>{
        const searchTerm=e.target.value
        const searchedProducts=products.filter((item)=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        setProductData(searchedProducts)
    }
    // const handleSorting=(e)=>{
    //     const sortValue=e.target.value
        
    //     if(sortValue==='ascendding'){
    //         const sortedProducts=products.sort((a,b)=>a.price-b.price)
    //         setProductData(sortedProducts)
    //     }
    //     if(sortValue==='descending'){
    //         const sortedProducts=products.sort((a,b)=>b.price-a.price)
    //         setProductData(sortedProducts)
    //     }


    // }
    return (
        <Helmet title='Shop'>
            <CommonSection title='Products'/>
                <section>
                    <Container>
                        <Row>
                            <Col lg='3' md='12' className=' text-center'>
                                <div className="filter__widget">
                                    <select onChange={handleFilter}>
                                        <option selected={true} value='all' >Filter By Category</option>
                                        <option value="sofa">Sofa</option>
                                        <option value="mobile">Mobile</option>
                                        <option value="chair">Chair</option>
                                        <option value="watch">Watch</option>
                                        <option value="wireless">Wireless</option>
                                    </select>
                                </div>
                            </Col>
                            {/* <Col lg='3' md='6' className='text-md-end text-center'>
                            <div className="filter__widget">
                                    <select onChange={handleSorting}>
                                        <option >Sort By</option>
                                        <option value="ascendding">Ascending</option>
                                        <option value="descending">Descending</option>
                                    </select>
                                </div>
                            </Col> */}
                            <Col lg='9' md='12'>
                                <div className="search__box">
                                    <input type="text" placeholder='Search' onChange={handleSearch} />
                                    <span><RiSearch2Line/></span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='p-0 pb-5'>
                    <Container>
                        <Row>
                            {
                                dataLoading?<div className='d-flex justify-content-center align-items-center'>
                                <div class="chaotic-orbit"></div>
                            </div>:productData.length===0?<h1 className='text-center p-5 fs-4'>No products found</h1>:
                                <ProductList data={productData}/>
                            }
                        </Row>
                    </Container>
                </section>
        </Helmet>
    )
}

export default Shop
