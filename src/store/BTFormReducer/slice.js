import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [
        {
            id: '123',
            image: 'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-thumb-xanh-600x600.jpg',
            name: 'note 20',
            price: '1000',
            productType: 'mobile',
            description: 'desc',
        },
        {
            id: '567',
            image: 'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-thumb-xanh-600x600.jpg',
            name: 'note 24',
            price: '1500',
            productType: 'mobile',
            description: 'desc',
        },
    ],
    productEdit: null,
}

// const slice = createSlice({
//     initialState,
//     name: 'BTFormReducer',
//     reducers: {},
// })

// export const { reducer: btFormReducer, actions: btFormActions } = slice

export const { reducer: btFormReducer, actions: btFormActions } = createSlice({
    initialState,
    name: 'BTFormReducer',
    reducers: {
        addProduct: (state, { payload }) => {
            // console.log('payload: ', payload)
            state.productList.push(payload)
        },
        deleteProduct: (state, { payload }) => {
            // console.log('payload: ', payload)
            state.productList = state.productList.filter((val) => val.id !== payload)
        },
        editProduct: (state, { payload }) => {
            // console.log('payload: ', payload)
            state.productEdit = payload
        },

        updateProduct: (state, { payload }) => {
            // C1:
            // const index = state.productList.findIndex((val) => val.id === payload.id)
            // if (index !== -1) {
            //     state.productList[index] = payload
            // }

            // C2:
            // state.productList = state.productList.map((item) => {
            //     // if (item.id !== payload.id) return item
            //     // return payload
            //     return item?.id !== payload.id ? item : payload
            // })

            state.productList = state.productList.map((item) =>
                item?.id !== payload.id ? item : payload
            )

            state.productEdit = null
        },
    },
})

{
    id: 2
}

// useEffect
// [{id: 1}, {payload}, {item}]
// ;[{ id: 1 }, { id: 2 }, { id: 3 }].map(item =>{
//     if(item.id !== payload.id) return item
//     return payload

// })
