// rafc

import React from 'react'
import { PhoneItem } from './PhoneItem'

export const PhoneList = ({ dataPhone }) => {
    // const { dataPhone } = props

    console.log('dataPhone: ', dataPhone)

    return (
        <div>
            <div className="row">
                {dataPhone.map((phone) => {
                    return (
                        <div key={phone.maSP} className="col-4">
                            {/* <div className="card">
                                <img src={phone.hinhAnh} height={414} alt="..." />

                                <div className="card-body">
                                    <p>{phone.tenSP}</p>
                                    <button className="btn btn-success">Xem chi tiết</button>
                                </div>
                            </div> */}

                            <PhoneItem phone={phone} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
