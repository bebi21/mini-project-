import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      name: "loc",
      age: 12,
      city: "hanoi",
    },
    {
      id: 2,
      name: "noc",
      age: 21,
      city: "nam dinh",
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    takeValue: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    editValue: (state, action) => {
      const index = action.payload.value2;
      const newItem = action.payload.value1;
      state.value[index] = { ...newItem };
    },
  },
});

// Action creators are generated for each case reducer function
export const { takeValue, editValue, update } = counterSlice.actions;

export default counterSlice.reducer;
