// rafc
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const DemoRedux = () => {
    // useSelector: Hook giúp lấy data từ trên store của redux
    // useDispatch: hook giúp thay đổi giá trị của state trên redux
    // useDispatch trả về giá trị là 1 hàm (thường gọi là hàm dispatch)
    // hàm dispatch dùng để đưa lên redux 1 thông tin (thường gọi là action)

    // hàm dispatch nhận vào tham số là 1 object như sau:
    //  {
    // type: string, (bắt buộc có)
    // payload: data gửi lên redux (có thể có or ko)
    // }

    // const [count, setCount] = useState(1)

    const demoReduxReducer = useSelector((state) => state.demoReduxReducer)
    console.log('demoReduxReducer: ', demoReduxReducer)

    // destructuring
    const { count } = demoReduxReducer

    const dispatch = useDispatch()

    return (
        <div className="container mt-5">
            <h2>DemoRedux</h2>

            <div className="mt-3">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        dispatch({
                            type: 'INCREASE_COUNT',
                            payload: 1,
                        })
                    }}
                >
                    +
                </button>
                <span className="mx-3 fs-3">{count}</span>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        dispatch({
                            type: 'DECREASE_COUNT',
                            payload: -1,
                        })
                    }}
                >
                    -
                </button>
            </div>
        </div>
    )
}
