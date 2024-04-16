import { createSlice } from '@reduxjs/toolkit'

// B1: khởi tạo initialState
const initialState = {
    number: 100,

    // BT xúc xác
    giaTriCuoc: false,
    // true: Tài
    // false: Xỉu
    tongSoLanChoi: 0,

    mangXucXac: [
        {
            imgSrc: '/images/1.png',
            diem: 1,
        },
        {
            imgSrc: '/images/2.png',
            diem: 2,
        },
        {
            imgSrc: '/images/4.png',
            diem: 4,
        },
    ],

    soLanThang: 0,
}

// B2: tạo slice
const btXucXacSlice = createSlice({
    name: 'btXucXac',
    initialState,

    // Xử lý những action đồng bộ
    reducers: {
        // 1 action
        demoSetState: (state, action) => {
            const { payload } = action
        },

        inCreaseNumber: (state, { payload }) => {
            // console.log('action: ', action)
            // const { payload } = action
            state.number += payload
            //immerjs
        },

        setGiaTriCuoc: (state, { payload }) => {
            // console.log('payload: ', payload)
            state.giaTriCuoc = payload
        },

        play: (state, { payload }) => {
            console.log('payload: ', payload)
            // Tăng số lần chơi +1
            state.tongSoLanChoi += 1

            // random mảng xúc xắc
            // [undefined, undefined, undefined]

            // C1:
            let tongDiem = 0
            const newMangXucXac = [...Array(3)].map((val) => {
                console.log('val: ', val)
                // random 1 số từ 1 tới 6
                const number = Math.floor(Math.random() * 6 + 1) // TRả về 1 số ngẫu nhiên trong dãy số  1, 2, 3,4,5,6
                console.log('number: ', number)
                tongDiem += number

                return {
                    imgSrc: `/images/${number}.png`,
                    diem: number,
                }
            })
            console.log('tongDiem: ', tongDiem)

            //C2:
            const tongDiem2 = newMangXucXac.reduce((sum, val) => (sum += val.diem), 0)
            console.log('tongDiem2: ', tongDiem2)

            state.mangXucXac = newMangXucXac

            // TH thua
            if (tongDiem === 3 || tongDiem === 18) return

            // TH thắng
            if (tongDiem >= 4 && tongDiem <= 10 && !state.giaTriCuoc) {
                state.soLanThang += 1
            }
            if (tongDiem >= 11 && tongDiem <= 17 && state.giaTriCuoc) {
                state.soLanThang += 1
            }
        },
    },

    // Xử lý những action bất đồng bộ (call API)
    extraReducers: (builder) => {},
})

// B3: export
export const { reducer: btXucXacReducer, actions: btXucXacActions } = btXucXacSlice

// actions.demoSetState()
