// rafc

import React, { useState } from 'react'
import { Header } from './Header'

export const DemoProps = () => {
    // props: property (thuộc tính của thẻ)
    // Lưu ý: Khi props thay đổi => component render lại

    const [bgColor, setBgColor] = useState('yellow')

    return (
        <div className="container mt-5">
            <h2>DemoProps</h2>
            {/* <img src="./abc" />
            <img src="./def" /> */}

            <div className="mt-3">
                <Header bgColor={bgColor} color="black" />
            </div>
            <button
                className="btn btn-success"
                onClick={() => {
                    setBgColor('red')
                }}
            >
                Change bg Color
            </button>
            {/* <div className="mt-3">
                <Header
                    bgColor="green"
                    style={{
                        padding: 20,
                        margin: 20,
                    }}
                />
            </div> */}
        </div>
    )
}
