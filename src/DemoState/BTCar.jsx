// rafc
import React, { useState } from 'react'

export const BTCar = () => {
    const [imgSrc, setImgSrc] = useState('./images/red-car.jpg')

    const handleImgSrc = (carColor) => {
        setImgSrc(`./images/${carColor}-car.jpg`)
    }

    return (
        <div className="mt-3">
            <h3>BTCar</h3>

            <div className="row">
                <div className="col-8">
                    <img className="img-fluid" src={imgSrc} alt="..." />
                </div>
                <div className="col-4 d-flex flex-column gap-5">
                    <button
                        className="btn btn-dark"
                        // onClick={() => {
                        //     // gọi hàm setImgSrc để thay đổi state imgSrc
                        //     setImgSrc('./images/black-car.jpg')
                        // }}
                        onClick={() => handleImgSrc('black')}
                    >
                        Dark
                    </button>
                    <button
                        className="btn btn-danger"
                        // onClick={() => {
                        //     // gọi hàm setImgSrc để thay đổi state imgSrc
                        //     setImgSrc('./images/red-car.jpg')
                        // }}
                        onClick={() => handleImgSrc('red')}
                    >
                        Red
                    </button>
                    <button
                        className="btn btn-secondary"
                        // onClick={() => {
                        //     // gọi hàm setImgSrc để thay đổi state imgSrc
                        //     setImgSrc('./images/silver-car.jpg')
                        // }}
                        onClick={() => handleImgSrc('silver')}
                    >
                        Silver
                    </button>
                    <button
                        className="btn"
                        style={{
                            backgroundColor: 'grey',
                        }}
                        // onClick={() => {
                        //     // gọi hàm setImgSrc để thay đổi state imgSrc
                        //     setImgSrc('./images/steel-car.jpg')
                        // }}
                        onClick={() => handleImgSrc('steel')}
                    >
                        Steel
                    </button>
                </div>
            </div>
        </div>
    )
}
