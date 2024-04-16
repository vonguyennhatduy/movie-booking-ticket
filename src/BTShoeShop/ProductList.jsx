// rafc
import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductList = (props) => {
    const { handleCarts } = props
    // console.log('handleCarts: ', handleCarts)

    return (
        <div>
            <div className="row">
                {props.data.map((shoe) => {
                    return (
                        <div className="col-4 mt-4" key={shoe.id}>
                            {/* <div className="card">
                                <img className="img-fluid" src={shoe.image} alt="..." />
                                <div className="card-body">
                                    <p>{shoe.name}</p>
                                    <p>${shoe.price}</p>
                                </div>
                            </div> */}
                            <ProductItem shoe={shoe} handleCarts={handleCarts} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
