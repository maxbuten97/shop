import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { productApi } from "./product/product.api";
import { cartReducer } from "./cart/cart.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
