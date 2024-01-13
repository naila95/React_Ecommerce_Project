import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basket";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
