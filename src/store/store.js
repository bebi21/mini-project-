import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reduce";
import product from "./crud";

export const store = configureStore({
  reducer: {
    reducer: counterSlice,
    store: product,
  },
});
