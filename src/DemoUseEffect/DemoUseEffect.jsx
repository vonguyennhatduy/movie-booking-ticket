//rafc

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Child } from './Child'

export const DemoUseEffect = () => {
    const [count, setCount] = useState(0)
    const [like, setLike] = useState(0)

    const [productList, setProductList] = useState([])
    console.log('productList: ', productList)

    const getProductList = async () => {
        try {
            const result = await axios.get('https://65afb8932f26c3f2139b97ca.mockapi.io/products')
            console.log('result: ', result)
            setProductList(result.data)
        } catch (err) {
            console.log('err: ', err)
        }
    }

    // const sum = () => {
    //     console.log('tính tổng a + b + c')
    // }
    // sum()

    ;(() => {
        console.log('abc')
    })()

    useEffect(() => {
        getProductList()
    }, [])

    useEffect(() => {
        // IIFE function
        console.log('32321')
        // (()=>{

        // })()
        ;(async () => {
            try {
                const result = await axios.get(
                    'https://65afb8932f26c3f2139b97ca.mockapi.io/products'
                )
                console.log('result: ', result)
                setProductList(result.data)
            } catch (err) {
                console.log('err: ', err)
            }
        })()
    }, [])

    //
    document.title = 'Count ' + count

    // 1s 2s

    // side effect
    // useEffect: Sẽ thực thi sau khi UI đc render xong và đc thực thi ít nhất là 1 lần
    // useEffect: có thể nhận vào 2 tham số:
    // tham số 1: callback => callback sẽ đc thực thi sau khi component render xong
    // tham số 2 (có thể có hoặc ko): dependencies: []

    // TH1: chỉ có tham số callback
    // Sẽ đc thực thi lại mỗi khi component bị re-render
    // Rất ít khi sử dụng

    useEffect(() => {
        console.log('useEffect TH1')
    })

    // TH2: có tham số callback, tham số dependencies = []
    // useEffect chỉ chạy duy nhất 1 lần ở lần render đầu tiên của component

    useEffect(() => {
        console.log('useEffect TH2')
    }, [])

    // TH3: có tham số callback, tham số dependencies = [...]
    // Khi giá trị ở trong dependencies thay đổi => useEffect sẽ đc thực thi lại

    useEffect(() => {
        console.log('useEffect TH3')
    }, [count, like])

    // TH4: useEffect có return function
    // function return sẽ đc gọi khi component bị xóa khỏi UI (unmount)
    // Thường sử dụng để clean up component => Xóa những logic thực thi lặp lại ở component

    useEffect(() => {
        console.log('useEffect TH4')
        const interval = setInterval(() => {
            console.log('Interval')
        }, 1000)

        return () => {
            console.log('useEffect TH4 return')
            clearInterval(interval)
        }
    }, [])

    console.log('RENDER')
    return (
        <div>
            <h2>DemoUseEffect</h2>

            <div>
                <button className="btn btn-success" onClick={() => setCount(count + 1)}>
                    + Count
                </button>
                <span className="fs-2 mx-4">{count}</span>
                <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
                    - Count
                </button>
            </div>
            <div>
                {productList.map((val) => (
                    <div key={val.id}>{val.name}</div>
                ))}
            </div>

            <div>
                {/* {
                    (()=>{

                    })()
                } */}
                {(() => {
                    const name = 'Nguyen Van A'

                    if (true) {
                    }

                    if (false) {
                    }

                    // phải return về 1 JSX hoặc null
                    return <div>{name}</div>
                })()}
            </div>

            <Child />
        </div>
    )
}
