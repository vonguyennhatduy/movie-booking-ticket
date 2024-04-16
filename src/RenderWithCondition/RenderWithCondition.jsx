// rafc

import React from 'react'

export const RenderWithCondition = () => {
    const isLogin = false

    const isShowMessage = false

    const number = 0

    const renderLogin = () => {
        if (isLogin) {
            return <div>Nguyễn Văn A</div>
        } else {
            return (
                <div>
                    <button className="btn btn-success">Đăng nhập</button>
                </div>
            )
        }
    }

    return (
        <div className="container mt-5">
            <h2>RenderWithCondition</h2>
            <div>
                {/* {isLogin ? (
                    <div>Nguyễn Văn A</div>
                ) : (
                    <div>
                        <button className="btn btn-success">Đăng nhập</button>
                    </div>
                )} */}

                {renderLogin()}
            </div>

            <div>{isShowMessage && <p>Hello BC 63</p>}</div>

            <div>{!!number && <p>Number là ...</p>}</div>
        </div>
    )
}
