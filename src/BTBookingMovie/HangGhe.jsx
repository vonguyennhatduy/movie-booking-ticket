import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { btBookingReducer } from '../store/BTBookingMovie/slice'
import { btBookingActions } from '../store/BTBookingMovie/slice'

export const HangGhe = (props) => {
  const {hangGhe, soHangGhe} = props

  console.log('object', soHangGhe);

  const {danhSachGheDangDat} = useSelector((state) => state.btBookingReducer);

  console.log('danh sách: ', danhSachGheDangDat);

  const dispatch = useDispatch();

  const renderGhe = () => {
    return hangGhe.danhSachGhe.map((ghe,index) => {
      let cssData = '';
      let disable = false;
      if(ghe.daDat === true) {
        cssData = 'gheDuocChon';
        disable = true;
      }

      let cssGheDangChon = '';

      const idx = danhSachGheDangDat.findIndex((value) => value.soGhe === ghe.soGhe);

      if(idx !== -1){
        cssGheDangChon = 'gheDangChon';
      }

      return (
        <button onClick={
          () => {
            dispatch(btBookingActions.UpdateGheDangChon(ghe));
          }
        }disabled={disable} className={`ghe ${cssData} ${cssGheDangChon}`} key={index}>{ghe.soGhe}</button>
      )
    })
  }

  const renderSoHangGhe = () => {
    return hangGhe.danhSachGhe.map((hang,index) => {
      return <button className='rowNumber'>
        {hang.soGhe}
      </button>
    })
  }

  const render = () => {
    if(soHangGhe === 0){
      return (
        <div className='ms-4'>
          {hangGhe.hang} {renderSoHangGhe()}
        </div>
      )
    }else {
      return (
        <div>
          {hangGhe.hang} {renderGhe()}
        </div>
      )
    }
  }
  
  return (
    <div>
        <div className="">
          {render()}
        </div>
    </div>
  )
}
