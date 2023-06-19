import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({data}) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {
                data?.map((item, i)=>{
                    return(
                        <ProductCard key={i} item={item} />
                    )
                })
            }
        </div>
    )
}

export default ProductsList
