import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Order = {
    id: string;
    name: string;
    price: number;
    quantity: number;
}
type OrderState = {
    order: Order[];
}

const initialState: OrderState = {
    order: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToOrderA(state, action: PayloadAction<Order>) {
            //debugger;
            let quantity = 1;
            const indexInOrder = state.order.findIndex(
                (item) => item.id === action.payload.id
            );

            if (indexInOrder > -1) {
                quantity = state.order[indexInOrder].quantity + 1;

                state.order.map((item) => {
                    if (item.id !== action.payload.id) return item;

                    return state.order = [
                        {
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            quantity,
                        }];
                })
            } else {
                state.order = [
                    ...state.order,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        price: action.payload.price,
                        quantity,
                    }]
            }
        },

        removeFromOrderA(state, action: PayloadAction<string>) {
            state.order = state.order.filter((item) => item.id !== action.payload);
        },
    },
});
export const { addToOrderA, removeFromOrderA } = orderSlice.actions;
export default orderSlice.reducer;


