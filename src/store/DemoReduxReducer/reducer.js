const initialState = {
    count: 999,
    number: 1,
    age: 20,
}
// #123

export const demoReduxReducer = (state = initialState, action) => {
    // console.log('action: ', action)
    switch (action.type) {
        case 'INCREASE_COUNT': {
            const newState = { ...state } // #1234
            newState.count += action.payload
            return newState
        }
        case 'DECREASE_COUNT': {
            // spread operator
            const newState = { ...state }
            newState.count += action.payload
            return newState
        }

        default:
            return state
    }
}

// const [state, setState] = useState({
// count: 1
// })
