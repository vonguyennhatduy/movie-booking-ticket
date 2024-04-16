// rafc

import React from 'react'
import { useSelector } from 'react-redux'

export const PhoneDetail = () => {
    //C1:
    // const btPhoneReduxReducer = useSelector((state) => state.btPhoneReduxReducer)
    // const { phoneDetail } = btPhoneReduxReducer
    // console.log('btPhoneReduxReducer: ', btPhoneReduxReducer)

    //C2:
    const { phoneDetail } = useSelector((state) => state.btPhoneReduxReducer)

    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <p className="mb-3 fs-3">Vinsmart Phone</p>
                    <img className="img-fluid" src={phoneDetail.hinhAnh} alt="..." />
                </div>
                <div className="col-8">
                    <p className="fs-3 mb-3">Thông số kỹ thuật</p>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Màn hình</td>
                                <td>{phoneDetail.manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{phoneDetail.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td>Camera Trước</td>
                                <td>{phoneDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera Sau</td>
                                <td>{phoneDetail.cameraSau}</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>{phoneDetail.ram}</td>
                            </tr>
                            <tr>
                                <td>ROM</td>
                                <td>{phoneDetail.rom}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
