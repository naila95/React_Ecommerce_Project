import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
});

export const {} = brandSlice.actions;

export default brandSlice.reducer;
