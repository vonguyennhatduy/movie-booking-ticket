// rafc
import React from 'react'
import { useDispatch } from 'react-redux'
import { btPhoneReduxAction } from '../store/BTPhoneReduxReducer/action'

export const PhoneItem = ({ phone }) => {
    const dispatch = useDispatch()

    return (
        <div className="card">
            <img src={phone.hinhAnh} height={414} alt="..." />

            <div className="card-body">
                <p>{phone.tenSP}</p>
                <div className="d-flex justify-content-between">
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            // dispatch({
                            //     type: 'SET_PHONE_DETAIL',
                            //     payload: phone,
                            // })
                            dispatch(btPhoneReduxAction.setPhoneDetail(phone))
                        }}
                    >
                        Xem chi tiết
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => {
                            dispatch({
                                type: 'SET_CARTS',
                                payload: phone,
                            })
                        }}
                    >
                        Mua hàng
                    </button>
                </div>
            </div>
        </div>
    )
}
