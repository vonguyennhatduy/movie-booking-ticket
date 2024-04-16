// rafc
import React from 'react'

export const BindingData = () => {
    const name = 'Nguyễn Văn A'

    const sum = (a, b) => {
        return a + b
    }

    // boolean ko hiển thị lên UI
    const isLogin = false

    const student = {
        fullName: 'Nguyễn Văn B',
        age: 20,
    }

    return (
        <div className="container mt-5">
            <h2>BindingData</h2>
            <p className="fs-3">{name}</p>
            <p>Sum: {sum(10, 20)}</p>

            <p>{isLogin}</p>

            <div>
                <p>FullName: {student.fullName}</p>
                <p>Age: {student.age}</p>
            </div>
        </div>
    )
}
