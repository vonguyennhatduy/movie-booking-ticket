// rafc
import React, { useState } from 'react'
import shoeList from './data.json'
import { ProductList } from './ProductList'
import { Cart } from './Cart'

export const BTShoeShop = () => {
    console.log('shoeList', shoeList)

    // State giỏ hàng
    const [carts, setCarts] = useState([]) // tham chiếu #123

    const handleCarts = (item) => {
        // C1:
        // console.log('item: ', item)
        // // coppy lại state carts hiện tại
        // // spread operator
        // const data = [...carts] // #1234

        // // Kiểm tra sản phẩm đã tồn tại ở trong carts hay chưa
        // const index = data.findIndex((value) => value.id === item.id)

        // if (index === -1) {
        //     // Chưa tồn tại ở trong giỏ hàng

        //     //  Thêm thuộc tính số lượng vào item
        //     //  spread operator
        //     const newItem = {
        //         ...item,
        //         cartQuantity: 1, // thuộc tính số lượng sản phẩm thêm vào giỏ hàng
        //     }

        //     // thêm sản phẩm vừa click vào btn add to cart
        //     data.push(newItem)
        // } else {
        //     // Nếu đã tổn tại trong carts => tăng giá trị cartQuantity
        //     data[index].cartQuantity += 1
        // }

        // // set lại state cart
        // setCarts(data) // #1234

        // C2:
        setCarts((currentState) => {
            // Kiểm tra sp đã tồn tại trong carts
            const index = currentState.findIndex((val) => val.id === item.id)

            if (index === -1) {
                // chưa tồn tại trong carts
                currentState.push({
                    ...item,
                    cartQuantity: 1,
                })
            } else {
                currentState[index].cartQuantity += 1
            }

            return [...currentState]
        })
    }

    // quantity: +1 => btn +
    // quantity: -1 => btn -
    const handleCartQuantity = (productId, quantity) => {
        console.log('quantity: ', quantity)
        console.log('productId: ', productId)

        setCarts((currentState) => {
            const index = currentState.findIndex((val) => val.id === productId)

            if (index !== -1) {
                // thay đổi thuộc tính cartQuantity của productId tương ứng trong carts
                currentState[index].cartQuantity = currentState[index].cartQuantity + quantity || 1

                // currentState[index].cartQuantity = 1 - 1 // 0 || 1
            }

            return [...currentState]
        })
    }

    const handleDeleteCartItem = (productId) => {
        console.log('productId: ', productId)

        setCarts((currentState) => {
            // sử dụng hàm filter để filter ra những sp trong cart 
            // ko trùng vs tham số productId truyền vào
            
            return currentState.filter((val) => val.id !== productId)
        })
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between">
                <h2>BTShoeShop</h2>
                <p className="fs-2" data-bs-toggle="modal" data-bs-target="#modalCart">
                    Giỏ hàng
                </p>
            </div>

            <ProductList data={shoeList} handleCarts={handleCarts} />

            <Cart
                carts={carts}
                handleCartQuantity={handleCartQuantity}
                handleDeleteCartItem={handleDeleteCartItem}
            />
        </div>
    )
}
