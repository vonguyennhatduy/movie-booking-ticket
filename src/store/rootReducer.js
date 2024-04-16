import { combineReducers } from 'redux'
import { demoReduxReducer } from './DemoReduxReducer/reducer'
import { btPhoneReduxReducer } from './BTPhoneReduxReducer/reducer'
import { btXucXacReducer } from './BTXucXacReducer/slice'
import { btFormReducer } from './BTFormReducer/slice'
import { btBookingReducer } from './BTBookingMovie/slice'

export const rootReducer = combineReducers({
    demoReduxReducer,
    btPhoneReduxReducer,
    btXucXacReducer,
    btFormReducer,
    btBookingReducer,

})
