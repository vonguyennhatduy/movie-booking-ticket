// rafc
import React from 'react'

export const Header = (props) => {
    console.log('props: ', props)

    console.log('RENDER')
    return (
        <div
            className="text-center text-white p-5"
            style={{
                background: props.bgColor,
            }}
        >
            Header
        </div>
    )
}
