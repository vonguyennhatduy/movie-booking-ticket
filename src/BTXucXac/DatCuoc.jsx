// rafc

import React from 'react'
import cn from 'classnames'

export const DatCuoc = ({ text, className, onChangeGiaTriCuoc }) => {
    console.log('className: ', className)
    return (
        <div
            className={cn('p-5 fs-3 fw-bold', className)}
            style={{
                border: '1px solid #111',
            }}
            onClick={onChangeGiaTriCuoc}
        >
            {text}
        </div>
    )
}
