import { createSlice } from "@reduxjs/toolkit";
import { goods } from '../data/goods';

export type Goods = {
    id: string;
    category?: string;
    author?: string;
    name: string;
    poster?: string;
    price: number
}
type GoodsState = {
    list: Goods[];
}

const initialState: GoodsState = {
    list: goods
}

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
    },
});

export default goodsSlice.reducer;


