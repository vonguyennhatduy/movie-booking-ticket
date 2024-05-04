import React from 'react'
import { btBookingReducer } from '../store/BTBookingMovie/slice';
import { btBookingActions } from '../store/BTBookingMovie/slice';
import { useDispatch, useSelector } from 'react-redux';

export const ThongTinDatGhe = () => {

  const {danhSachGheDangDat} = useSelector((state) => state.btBookingReducer);
  const dispatch = useDispatch();

  console.log('thông tin: ', danhSachGheDangDat);
  return (
    <div>
        <div className="d-flex flex-row">
          <div className="gheDuocChon"></div>
          <div style={{fontSize: '25px'}} className='text-white ms-2'>Ghế đã đặt</div>
        </div>
        <div className="d-flex flex-row mt-2">
          <div className="gheDangChon"></div>
          <div style={{fontSize: '25px'}} className='text-white ms-2'>Ghế đang đặt</div>
        </div>
        <div className="d-flex flex-row mt-2 ">
          <div className="ghe gheChuaDat"></div>
          <div style={{fontSize: '25px'}} className='text-white ms-2'>Ghế chưa đặt</div>
        </div>

        <div className="mt-5 me-5">
          <div
            class="table-responsive-xl"
          >
            <table
              class="table table-success"
            >
              <thead>
                <tr>
                  <th scope="col">Số ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>

                  {
                    danhSachGheDangDat.map((ghe,index) => {
                      return (
                        <tr key={index}>
                          <td className='pe-5'>{ghe.soGhe}</td>
                          <td className='pe-5'>{ghe.gia.toLocaleString()}</td>
                          <td>
                            <button onClick={
                              () => {
                                dispatch(btBookingActions.CancelTicket(ghe))
                              }
                            } className='btn btn-danger'>Hủy</button>
                          </td>
                        </tr>
                      )
                    })
                  }
              </tbody>
              <tfoot>
                <tr>
                  <td>Tổng tiền</td>
                  <td>
                    {
                      danhSachGheDangDat.reduce((ans,ghe,index) => {
                        return ans += ghe.gia;
                      }, 0).toLocaleString()
                    }
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          
        </div>
        
    </div>
  )
}
