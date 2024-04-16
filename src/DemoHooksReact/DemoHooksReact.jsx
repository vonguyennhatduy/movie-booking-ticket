// rafc
import React, { useRef, useState, useMemo } from 'react'

export const DemoHooksReact = () => {
    // useRef:
    // Lưu giá trị => ko bị mất khi component re-render (tương tự state)
    // Không cung cấp phương thức để làm component re-render (state thì có phương thức setState)

    // DOM

    const [count, setCount] = useState(1)
    console.log('count: ', count)

    const objectRef = useRef({ number: 1 })
    console.log('objectRef: ', objectRef.current)

    const obj = {
        number: 1,
    }
    console.log('obj: ', obj)

    // objectRef.current = {
    //     number: 100,
    // }
    // console.log('objectRef: ', objectRef.current)

    // demo DOM
    const inputRef = useRef(null)

    // useMemo
    // const memo = useMemo(() => {}, [...])

    const total1 = 1000 + 20000 + 30000
    // console.log('total: ', total)

    const total = useMemo(() => {
        console.log('useMemo')
        return 1000 + 20000 + 30000 + count
    }, [count])
    console.log('total: ', total)

    console.log('RENDER')
    return (
        <div>
            <h2>DemoHooksReact</h2>

            <h3>UseRef</h3>
            <button
                className="btn btn-success"
                onClick={() => {
                    obj.number = 100
                    objectRef.current = {
                        number: 100,
                    }
                    setCount(count + 1)
                }}
            >
                + Count
            </button>
            <div>
                <input type="text" className="form-control" ref={inputRef} />
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        console.log(inputRef.current)
                        const value = inputRef.current.value
                        console.log('value: ', value)
                    }}
                >
                    Get Value Input
                </button>
            </div>
        </div>
    )
}
