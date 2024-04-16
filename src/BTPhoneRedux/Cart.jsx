// rafc
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btPhoneReduxAction } from '../store/BTPhoneReduxReducer/action'

export const Cart = () => {
    const { carts } = useSelector((state) => state.btPhoneReduxReducer)
    console.log('carts: ', carts)

    const dispatch = useDispatch()

    return (
        <div className="modal" id="phoneCart" tabIndex={-1}>
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên SP</th>
                                    <th>Hình ảnh</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((phone, index) => {
                                    return (
                                        <tr key={phone.maSP}>
                                            <td>{index + 1}</td>
                                            <td>{phone.tenSP}</td>
                                            <td>
                                                <img
                                                    src={phone.hinhAnh}
                                                    alt="..."
                                                    width={100}
                                                    height={100}
                                                />
                                            </td>
                                            <td>{phone.giaBan}</td>
                                            <td>
                                                <button
                                                    className="btn btn-dark"
                                                    onClick={() => {
                                                        // dispatch({
                                                        //     type: 'SET_CARTS_QUANTITY',
                                                        //     payload: {
                                                        //         productId: phone.maSP, // biết sp nào muốn thay đổi sl
                                                        //         quantity: -1, // tăng hay giảm sl
                                                        //     },
                                                        // })

                                                        dispatch(
                                                            btPhoneReduxAction.setCartsQuantity({
                                                                productId: phone.maSP,
                                                                quantity: -1,
                                                            })
                                                        )
                                                    }}
                                                >
                                                    -
                                                </button>
                                                <span className="mx-3">{phone.cartQuantity}</span>
                                                <button
                                                    className="btn btn-dark"
                                                    onClick={() => {
                                                        // dispatch({
                                                        //     type: 'SET_CARTS_QUANTITY',
                                                        //     payload: {
                                                        //         productId: phone.maSP, // biết sp nào muốn thay đổi sl
                                                        //         quantity: 1, // tăng hay giảm sl
                                                        //     },
                                                        // })
                                                        dispatch(
                                                            btPhoneReduxAction.setCartsQuantity({
                                                                productId: phone.maSP,
                                                                quantity: 1,
                                                            })
                                                        )
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>{phone.giaBan * phone.cartQuantity}</td>
                                            <td>
                                                <button
                                                    className="btn btn-dark"
                                                    onClick={() => {
                                                        // dispatch({
                                                        //     type: 'DELETE_CART',
                                                        //     payload: phone.maSP,
                                                        // })
                                                        dispatch(
                                                            btPhoneReduxAction.deleteCart(
                                                                phone.maSP
                                                            )
                                                        )
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
