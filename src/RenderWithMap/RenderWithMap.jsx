// rafc

import React from 'react'

export const RenderWithMap = () => {
    const products = [
        {
            id: 1,
            name: 'Iphone',
            price: 1000,
            color: 'black',
            system: 'IOS',
        },
        {
            id: 2,
            name: 'SamSung',
            price: 1200,
            color: 'white',
            system: 'Android',
        },
        {
            id: 3,
            name: 'Nokia',
            price: 500,
            color: 'blue',
            system: 'Symbian',
        },
    ]
    return (
        <div className="container mt-5">
            <h2>RenderWithMap</h2>

            <p className='sub-title'>Sub title</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>System</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 
                        1. Phải return về 1 UI (1 thẻ JSX)
                        2. Chỉ đc phép return về 1 thẻ JSX duy nhất
                        3. Bắt buộc phải có thuộc tính key ở thẻ JSX bao ngoài cùng
                        4. Giá trị của thuộc tính phải là duy nhất tương ứng vs mỗi lần lặp.
                        5. Hạn chế sử dụng index làm giá trị cho thuộc tính key 
                        => chỉ nên sử dụng trong trường hợp mảng tĩnh (ko có sự thêm, sửa, xóa)
                     */}
                     
                    {products.map((value, index) => {
                        return (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.price}</td>
                                <td>{value.color}</td>
                                <td>{value.system}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

// styled-component
