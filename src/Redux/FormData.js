import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: [],
  },
  reducers: {
    AddNewData: (state, action) => {
      state.data.push(action.payload)
    },
    IncCheckboxArry: (state, action) => {
      const arrayObj = state.data.findIndex(
        (obj) => obj.id === action.payload.id
      )
      state.formData[arrayObj].value = action.payload.value
    },

    DecCheckboxArry: (state, action) => {
      state.value += 1
      const arrayObj = state.data.findIndex(
        (obj) => obj._id === action.payload.productId
      )
      state.cart[arrayObj].quantity += 1
    },


  //   decrementCartItemQ: (state, action) => {
  //     state.value -= 1
  //     const arrayObj = state.cart.findIndex(
  //       (obj) => obj._id === action.payload.productId
  //     )
  //     state.cart[arrayObj].quantity -= 1
  //   },
  //   DeleteItemInCart: (state, action) => {
  //     state.value -= 1
  //     const arrayObj = state.cart.findIndex(
  //       (obj) => obj._id === action.payload.productId
  //     )
  //     state.cart.splice(arrayObj, 1)
  //   },
},
})
export const {
  AddNewData,
 IncCheckboxArry,
} = formSlice.actions
export default formSlice.reducer
