import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("basket"))
    ? JSON.parse(localStorage.getItem("basket"))
    : [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let basketItem = state.value.find((item) => {
        return item.id == action.payload;
      });
      if (!basketItem) {
        state.value.push({ id: action.payload });
        localStorage.setItem("basket", JSON.stringify(state.value));
      }
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
