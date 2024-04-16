// rafc
import React from 'react'

export const ProductItem = (props) => {
    // console.log('props: ', props)

    // destructuring
    const { shoe, handleCarts } = props
    console.log('handleCarts: ', handleCarts)

    return (
        <div className="card">
            <img className="img-fluid" src={shoe.image} alt="..." />
            <div className="card-body">
                <p>{shoe.name}</p>
                <p>${shoe.price}</p>

                <button className="btn btn-dark mt-3" onClick={() => handleCarts(shoe)}>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}
