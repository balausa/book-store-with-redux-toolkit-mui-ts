import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./goodsSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    goods: goodsReducer,
    order: orderSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;