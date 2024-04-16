// rafc

import React from 'react'
import { Game } from './Game'
import { Result } from './Result'
import { useDispatch, useSelector } from 'react-redux'
import { btXucXacActions } from '../store/BTXucXacReducer/slice'

export const BTXucXac = () => {
    // dustructuring
    const { number } = useSelector((state) => state.btXucXacReducer)
    console.log('number: ', number)
    const dispatch = useDispatch()

    return (
        <div className="container mt-5">
            <h2>Demo Redux Toolkit</h2>
            <p className="fs-3">Number: {number}</p>
            <button
                className="btn btn-success"
                onClick={() => {
                    dispatch(btXucXacActions.inCreaseNumber(1))
                }}
            >
                + Number
            </button>
            <hr />
            <h2>BTXucXac</h2>
            <h3 className="text-center">Game đổ xúc xắc</h3>
            <div className="mt-4">
                <Game />
            </div>
            <div className="mt-4">
                <Result />
            </div>
        </div>
    )
}
