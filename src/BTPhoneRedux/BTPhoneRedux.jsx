// rafc

import React from 'react'
import { PhoneDetail } from './PhoneDetail'
import { PhoneList } from './PhoneList'
import dataPhone from './data.json'
import { Cart } from './Cart'

export const BTPhoneRedux = () => {
    console.log('dataPhone: ', dataPhone)

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between">
                <h2>BTPhoneRedux</h2>
                <p className="fs-2" data-bs-toggle="modal" data-bs-target="#phoneCart">
                    Giỏ hàng
                </p>
            </div>

            <PhoneList dataPhone={dataPhone} />

            <PhoneDetail />

            <Cart />
        </div>
    )
}
