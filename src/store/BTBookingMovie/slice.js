import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    danhSachGheDangDat:  [

    ],

}

const btBookingSlice = createSlice({
    name: 'btBooking',

    initialState,

    reducers: {
        UpdateGheDangChon: (state , {payload}) => {
            const index = state.danhSachGheDangDat.findIndex((value) => value.soGhe === payload.soGhe);
            if(index !== -1){
                state.danhSachGheDangDat.splice(index,1);
            }else {
                state.danhSachGheDangDat.push(payload);
            }
        },

        CancelTicket: (state, gheID) => {
            const idx = state.danhSachGheDangDat.findIndex((value) => value.soGhe === gheID);
            
            state.danhSachGheDangDat.splice(idx,1);
        }
    },

    extraReducers: (builder) => {},
})

export const {reducer: btBookingReducer , actions: btBookingActions} = btBookingSlice;