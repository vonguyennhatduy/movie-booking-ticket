// rafc

import React from 'react'

// import file css
import './style.css'
// => Nó ảnh hưởng css cho toàn bộ component trong dự án

// import css module
// Chỉ ảnh hưởng tới component sử dụng style module
import style from './style.module.css'

export const StyleComponent = () => {
    return (
        <div className="container mt-5 StyleComponent">
            {/* style inline */}
            <h2
                className="title"
                style={{
                    color: 'red',
                    backgroundColor: 'yellow',
                    paddingTop: 20,
                    paddingBottom: 20,
                }}
            >
                StyleComponent
            </h2>
            <p className="sub-title">Sub Title</p>

            <p className={`${style.description} ${style.abc}`}>Description</p>

            <p className={style['abc-123']}>Description</p>
        </div>
    )
}
