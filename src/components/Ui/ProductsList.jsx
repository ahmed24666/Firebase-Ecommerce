import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({data}) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {
                data?.map((item)=>{
                    return(
                        <ProductCard key={item.id} item={item} />
                    )
                })
            }
        </div>
    )
}

export default ProductsList
