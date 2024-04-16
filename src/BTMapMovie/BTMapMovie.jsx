// rafc

import React, { useState } from 'react'
import danhSachPhim from './data.json'
import { useSearchParams, useNavigate, generatePath } from 'react-router-dom'
import { useQueryUrl } from '../hooks/useQueryUrl'
import { PATH } from '../constants/config'

export const BTMapMovie = () => {
    console.log('danhSachPhim', danhSachPhim)
    const [inputValue, setInputValue] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()
    console.log('searchParams name: ', searchParams.get('name'))

    console.log('RENDER')

    const [queryUrl, setQueryUrl] = useQueryUrl()

    const navigate = useNavigate()

    const renderPhim = () => {
        // const keyPhimSearch = searchParams.get('phim')
        const keyPhimSearch = queryUrl.phim
        console.log('keyPhimSearch: ', keyPhimSearch)

        const newListPhim = danhSachPhim.filter((val) =>
            val.tenPhim.toLowerCase().includes((keyPhimSearch || '').toLocaleLowerCase())
        )
        console.log('newListPhim: ', newListPhim)

        return (
            <div className="row">
                {newListPhim.map((phim) => {
                    return (
                        <div className="col-3 mt-4" key={phim.maPhim}>
                            <div className="card">
                                <img src={phim.hinhAnh} alt="..." style={{ height: 300 }} />
                                <div className="card-body">
                                    <p className="fw-bold" style={{ height: 40 }}>
                                        {phim.tenPhim}
                                    </p>
                                    <p style={{ height: 80 }}>{phim.moTa.substring(0, 40)}...</p>

                                    <button
                                        className="btn btn-success mt-3"
                                        onClick={() => {
                                            // const path = generatePath(PATH.movieDetail, {
                                            //     movieId: phim.maPhim,
                                            // })

                                            // navigate(path)

                                            navigate(
                                                generatePath(PATH.movieDetail, {
                                                    movieId: phim.maPhim,
                                                })
                                            )

                                            // navigate(`/${PATH.movieDetail}/${phim.maPhim}`)
                                        }}
                                    >
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="container mt-5">
            <h2>BTMapMovie</h2>
            <div>
                <input
                    // defaultValue={searchParams.get('phim') || ''}
                    defaultValue={queryUrl.phim || ''}
                    className="form-control"
                    onChange={(ev) => {
                        // console.log('value', ev.target.value)
                        setInputValue(ev.target.value)
                    }}
                />
                <button
                    className="btn btn-success mt-3"
                    onClick={() => {
                        console.log({ inputValue })
                        // falsy: 0, "", false, undefined, null, NaN
                        // falsy || value

                        // setSearchParams({
                        //     phim: inputValue,
                        // })
                        setQueryUrl({
                            phim: inputValue || undefined,
                            // phim: undefined,
                        })
                    }}
                >
                    Tìm kiếm
                </button>
            </div>
            <div className="row">
                {/* {danhSachPhim.map((phim) => {
                    return (
                        <div className="col-3 mt-4" key={phim.maPhim}>
                            <div className="card">
                                <img src={phim.hinhAnh} alt="..." style={{ height: 300 }} />
                                <div className="card-body">
                                    <p className="fw-bold" style={{ height: 40 }}>
                                        {phim.tenPhim}
                                    </p>
                                    <p style={{ height: 80 }}>{phim.moTa.substring(0, 40)}...</p>
                                </div>
                            </div>
                        </div>
                    )
                })} */}

                {renderPhim()}
            </div>
        </div>
    )
}
