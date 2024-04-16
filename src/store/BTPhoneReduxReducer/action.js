import { btPhoneReduxActionType } from './actionType'

export const btPhoneReduxAction = {
    setPhoneDetail: (payload) => {
        return {
            type: btPhoneReduxActionType.setPhoneDetail,
            payload,
        }
    },

    setCarts: (payload) => {
        return {
            type: btPhoneReduxActionType.setCarts,
            payload,
        }
    },

    setCartsQuantity: (payload) => {
        return {
            type: btPhoneReduxActionType.setCartsQuantity,
            payload,
        }
    },

    deleteCart: (payload) => ({
        type: btPhoneReduxActionType.deleteCart,
        payload,
    }),
}
