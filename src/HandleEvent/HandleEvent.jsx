// rafc
import React from 'react'

export const HandleEvent = () => {
    const logger = () => {
        alert('Hello BC 63')
    }

    const showMessage = (mesage) => {
        alert(mesage)
    }

    // Lưu ý: tất cả sự kiện ở trong react đều trả về 1 tham số event

    return (
        <div className="container mt-5">
            <h2>HandleEvent</h2>

            {/* Trường hợp hàm ko có tham số */}
            <button className="btn btn-success" onClick={logger}>
                Logger
            </button>

            {/* Trường hợp hàm có tham số */}
            <button
                className="btn btn-danger ms-3"
                onClick={(event) => {
                    console.log('event: ', event)

                    console.log(event.target)

                    showMessage('Hello word')
                    // logger()
                }}
            >
                Show message
            </button>

            <input
                type="text"
                onBlur={(ev) => {
                    console.log(ev)
                }}
                
                onChange={(ev)=>{
                    console.log(ev)
                    console.log(ev.target.value)
                }}
            />
        </div>
    )
}
