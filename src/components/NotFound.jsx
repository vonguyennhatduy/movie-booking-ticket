// rafc
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../constants/config'

export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="p-5 bg-success text-white text-center fs-1 fw-bold">
            NotFound
            <div className="mt-5">
                <button
                    className="btn btn-warning"
                    onClick={() => {
                        // về home
                        // navigate('/')

                        // về trang bất kỳ
                        navigate(PATH.btxucxac)
                    }}
                >
                    Home
                </button>
            </div>
        </div>
    )
}
