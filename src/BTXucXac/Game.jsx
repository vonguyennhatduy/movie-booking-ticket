//rafc

import React from 'react'
import { DatCuoc } from './DatCuoc'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'
import { btXucXacActions } from '../store/BTXucXacReducer/slice'

export const Game = () => {
    const { giaTriCuoc, mangXucXac } = useSelector((state) => state.btXucXacReducer)
    // console.log('giaTriCuoc: ', giaTriCuoc)
    console.log('mangXucXac: ', mangXucXac)

    const dispatch = useDispatch()

    return (
        <div className="d-flex justify-content-around">
            <DatCuoc
                text="Tài"
                className={cn({
                    'bg-success': giaTriCuoc,
                })}
                onChangeGiaTriCuoc={() => {
                    // console.log('ABCCCCCCCC')
                    dispatch(btXucXacActions.setGiaTriCuoc(true))
                }}
            />

            <div>
                {/* <img width={40} height={40} src="./images/1.png" alt="..." />
                <img width={40} height={40} src="./images/2.png" alt="..." />
                <img width={40} height={40} src="./images/3.png" alt="..." /> */}
                {mangXucXac.map((val, index) => {
                    return <img width={40} height={40} src={val.imgSrc} alt="..." key={index} />
                })}

                <div className="mt-3">
                    <p> 4 - 10: Xỉu</p>
                    <p> 11 - 17: Tài</p>
                </div>
            </div>
            <DatCuoc
                text="Xỉu"
                className={cn({
                    'bg-warning': !giaTriCuoc,
                })}
                onChangeGiaTriCuoc={() => {
                    // console.log('ABCCCCCCCC')
                    dispatch(btXucXacActions.setGiaTriCuoc(false))
                }}
            />
        </div>
    )
}

// const demo = (...rest) => {
//     console.log('rest: ', rest)
// }

// demo(1, 2, 3, 4, {
//     name: 'abc',
//     age: 18,
// })
