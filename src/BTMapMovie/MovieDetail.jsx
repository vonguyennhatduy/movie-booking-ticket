// rafc

import React from 'react'
import { useParams } from 'react-router-dom'
import dsPhim from './data.json'

export const MovieDetail = () => {
    const params = useParams()
    const { movieId } = params

    console.log('params: ', params)

    const renderMovieDetail = () => {
        const phim = dsPhim.find((val) => val.maPhim === movieId * 1)
        console.log('phim: ', phim)
        return (
            <div className="row mt-4">
                <div className="col-4">
                    <img src={phim.hinhAnh} alt="..." />
                </div>
                <div className="col-8">
                    <p className="fw-bold fs-2">{phim.tenPhim}</p>
                    <p className="mt-3">
                        Mô tả: <span>{phim.moTa}</span>
                    </p>
                </div>
            </div>
        )
    }

    // renderMovieDetail()

    return (
        <div>
            <h2>MovieDetail</h2>
            {renderMovieDetail()}
        </div>
    )
}
