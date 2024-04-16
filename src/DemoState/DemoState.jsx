// rafc

import React, { useState } from 'react'
import { BTCar } from './BTCar'

export const DemoState = () => {
    // let isLogin = true
    let [isLogin, setIsLogin] = useState(true)
    console.log('isLogin: ', isLogin)

    const changeIsLogin = () => {
        console.log('isLogin', isLogin)

        // isLogin = false
        setIsLogin(false)

        // isLogin = false

        console.log('isLogin', isLogin)
    }

    // useState: Function
    // 1. Khi muốn thay đổi UI dựa vào giá trị của 1 biến => sử dụng state (useState)
    // 2. Để tạo 1 state ở trong function component react sử dụng hook useState
    // 3. useState trả về 1 mảng gồm 2 phần tử:
    // - Phần tử 0: state => dùng để render UI, xử lý logic...
    // - phần tử 1: là 1 function (gọi hàm setState) => dùng để thay đổi giá trị của state
    // cú pháp:
    // const [state, setSate] = useState(initialState) // initialState : giá trị mặc định ban đầu của state
    // 4. initialState: number, string, boolean, array, object, function
    // 5. initialState sẽ đc gán cho state ở lần render đầu tiên của component,
    //  trong trường hợp initialState là 1 function thì sẽ lấy giá trị trả về (return) của function để gán cho state
    //  function này chỉ đc gọi 1 lần duy nhất ở lần render đầu tiên của component
    // 6. Khi thay đổi giá trị state = hàm setState component sẽ bị render lại => UI sẽ đc cập nhật
    // 7. Trong 1 component có thể gọi nhiều lần hook useState để tạo ra những state khác nhau

    const [state, setState] = useState(() => {
        return 123
    })

    const [number, setNumber] = useState(1)

    const [fontSize, setFontSize] = useState(16)

    console.log('state: ', state)

    // setState(345)

    // const prouducts = ['abc', 'def']

    // const [product1, product2] = prouducts

    // console.log('RENDER')
    return (
        <div className="container mt-5">
            <h2>DemoState</h2>

            <div>
                {isLogin ? (
                    <p>Nguyễn Văn A</p>
                ) : (
                    <div>
                        <button className="btn btn-success">Đăng nhập</button>
                    </div>
                )}

                <div>
                    <button className="btn btn-warning" onClick={changeIsLogin}>
                        Change isLogin
                    </button>
                </div>
            </div>

            <div className="mt-3">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        // gọi setNumber để thay đổi giá trị của state number
                        setNumber(number + 1)
                    }}
                >
                    +
                </button>
                <span className="fs-2 mx-5">{number}</span>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        // gọi setNumber để thay đổi giá trị của state number
                        setNumber(number - 1)
                    }}
                >
                    -
                </button>
            </div>

            <div className="mt-3">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        // gọi setFontSize để thay đổi state fontSize
                        setFontSize(fontSize + 5)
                    }}
                >
                    +
                </button>
                <span
                    className="mx-5"
                    style={{
                        fontSize: fontSize,
                    }}
                >
                    Hello BC 63
                </span>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        // gọi setFontSize để thay đổi state fontSize
                        setFontSize(fontSize - 5)
                    }}
                >
                    -
                </button>
            </div>

            <BTCar />
        </div>
    )
}
