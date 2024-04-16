import React from 'react'
import './BaiTapBookingTicket.css'
import DanhSachGheBooking from './danhSachGhe.json'
import { HangGhe } from './HangGhe'
import {ThongTinDatGhe} from './ThongTinDatGhe'

export const BTBookingMovie = () => {

    const renderHangGhe = () => {
        return DanhSachGheBooking.map((hangGhe,index) => {
            return (
                <div key={index}>
                    <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
                </div>
            )
        })
    }

    console.log(': ', DanhSachGheBooking);

  return (
    <div className='bookingMovie' style={{position: "fixed" , width: "100%", height: "100%", backgroundImage: "url('./images/bgmovie.jpg')", backgroundSize: "100%"}}>
        <div style={{position: "fixed" , width: "100%", height: "100%", backgroundSize: "100%", backgroundColor: 'rgba(0,0,0,0.7)'}}>
            <div className="row">
                <div style={{fontSize: "45px"}} className="col-8 text-warning text-center">
                    <div className="title">
                        ĐẶT VÉ XEM PHIM CYBERLEARN
                    </div>
                    <div className="screen" style={{marginLeft: "95px"}}>
                        Màn hình 
                    </div>
                    {renderHangGhe()}
                </div>
                <div className="col-4">
                    <div style={{fontSize: "30px"}} className="text-white mb-4">
                        DANH SÁCH GHẾ BẠN CHỌN
                    </div>
                    <ThongTinDatGhe/>

                </div>
            </div>
        </div>
    </div>
  )
}