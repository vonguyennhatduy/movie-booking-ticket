// rafc

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btXucXacActions } from '../store/BTXucXacReducer/slice'

export const Result = () => {
    const { giaTriCuoc, tongSoLanChoi, soLanThang } = useSelector((state) => state.btXucXacReducer)
    console.log('tongSoLanChoi: ', tongSoLanChoi)

    const dispatch = useDispatch()

    return (
        <div className="text-center">
            <p className="fs-2">Bạn chọn: {giaTriCuoc ? 'Tài' : 'Xỉu'}</p>
            <p className="fs-2 my-3">Số bàn thắng: {soLanThang}</p>
            <p className="fs-2">Tổng số lần chơi: {tongSoLanChoi}</p>
            <div className="mt-4">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        dispatch(btXucXacActions.play())
                    }}
                >
                    PLAY
                </button>
            </div>
        </div>
    )
}
