import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const quiz = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { takeValue, editValue, update } = quiz.actions;

export default quiz.reducer;
