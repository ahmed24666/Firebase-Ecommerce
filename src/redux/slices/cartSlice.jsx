import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const itemss=localStorage.getItem('cartItems')!==null?JSON.parse(localStorage.getItem('cartItems')):[]
const totalAmount=localStorage.getItem('totalAmount')!==null?JSON.parse(localStorage.getItem('totalAmount')):0
const totalQuantity=localStorage.getItem('totalQuantity')!==null?JSON.parse(localStorage.getItem('totalQuantity')):0

const initialState = {
    cartItems: itemss,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find((item) => item.id === newItem.id)
            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            toast.success('Product added successfully')
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity),0)

            localStorage.setItem('cartItems' ,JSON.stringify(state.cartItems.map(item=>item)))
            localStorage.setItem('totalAmount' ,JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity' ,JSON.stringify(state.totalQuantity))
        },
        removeItem: (state, action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find((item) => item.id === newItem.id)
            state.totalQuantity--
            state.totalAmount =state.totalAmount!==0?state.totalAmount- Number(existingItem.price):state.totalAmount
            if (existingItem.quantity==1) {
                state.cartItems=state.cartItems.filter((item)=>item.id!==existingItem.id)
                toast.error('Product deleted successfully')

            } else {
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(newItem.price)
                toast.info('Product removed successfully')
            }

            localStorage.setItem('cartItems' ,JSON.stringify(state.cartItems.map(item=>item)))
            localStorage.setItem('totalAmount' ,JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity' ,JSON.stringify(state.totalQuantity))
        },
        deleteItem:(state,action)=>{
            const id=action.payload
            const existingItem=state.cartItems.find((item)=>item.id===id)
            if(existingItem){
                state.cartItems=state.cartItems.filter((item)=>item.id!==id)
                state.totalQuantity=state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity),0)
            toast.error('Product deleted successfully')

            localStorage.setItem('cartItems' ,JSON.stringify(state.cartItems.map(item=>item)))
            localStorage.setItem('totalAmount' ,JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity' ,JSON.stringify(state.totalQuantity))
        }
    }
});

export const { addItem ,deleteItem ,removeItem} = cartSlice.actions
export default cartSlice.reducer