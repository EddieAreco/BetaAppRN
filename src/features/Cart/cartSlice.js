import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            items: [],
            total: null,
            user: 'userLogged',
            updateAt: Date.now().toLocaleString(),
        }
    },
    reducers: {
        addItem: (state, action) => {
            const productRepeated = state.value.items.find(product => product.id === action.payload.id)

            if (productRepeated) {
                const itemUpdate = state.value.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemUpdate.reduce(
                    (acc, item) => (acc + item.price * item.quantity), 0)

                state.value = {
                    ...state.value,
                    items: itemUpdate,
                    total: total,
                    updateAt: Date.now().toLocaleString(),
                }
            }
            else {
                state.value.items.push(action.payload)
                const total = state.value.items.reduce(
                    (acc, item) => (acc + item.price * item.quantity), 0)

                state.value = {
                    ...state.value,
                    items: state.value.items,
                    total: total,
                    updateAt: Date.now().toLocaleString(),
                }
            }
        },
        removeItem: (state, action) => {
            state.value -= action.payload
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer