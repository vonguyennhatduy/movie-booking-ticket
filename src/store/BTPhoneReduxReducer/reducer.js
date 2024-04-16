import { btPhoneReduxActionType } from './actionType'

const initialState = {
    phoneDetail: {
        maSP: 1,
        tenSP: 'VinSmart Live',
        manHinh: 'AMOLED, 6.2, Full HD+',
        heDieuHanh: 'Android 9.0 (Pie)',
        cameraTruoc: '20 MP',
        cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
        ram: '4 GB',
        rom: '64 GB',
        giaBan: 5700000,
        hinhAnh: './images/vsphone.jpg',
    },

    carts: [],
}

export const btPhoneReduxReducer = (state = initialState, action) => {
    // console.log('action: ', action)
    switch (action.type) {
        case btPhoneReduxActionType.setPhoneDetail: {
            // const newState = {...state}
            return {
                ...state,
                phoneDetail: action.payload,
            }
        }
        case btPhoneReduxActionType.setCarts: {
            //spread operator
            const newCarts = [...state.carts]

            // Kiểm tra sản phẩm đã tồn tại trong carts hay chưa
            const index = newCarts.findIndex((val) => val.maSP === action.payload.maSP)

            if (index !== -1) {
                newCarts[index].cartQuantity += 1
            } else {
                // thêm sp vào carts
                newCarts.push({
                    ...action.payload,
                    cartQuantity: 1,
                })
            }

            return {
                ...state,
                carts: newCarts,
            }
        }
        case btPhoneReduxActionType.setCartsQuantity: {
            const newCarts = [...state.carts]
            // destructuring
            const { productId, quantity } = action.payload

            // Tìm index của sp trong carts
            const index = newCarts.findIndex((val) => val.maSP === productId)

            // thay đổi số lượng của sp
            if (index !== -1) {
                newCarts[index].cartQuantity = quantity + newCarts[index].cartQuantity || 1

                // 0 || 1
            }

            return {
                ...state,
                carts: newCarts,
            }
        }
        case btPhoneReduxActionType.deleteCart: {
            return {
                ...state,
                carts: state.carts.filter((val) => val.maSP !== action.payload),
            }
        }
        default:
            return state
    }
}
