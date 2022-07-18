import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  visible: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => ({ ...state, counter: state.counter + 1 }),
    decrement: (state) => ({ ...state, counter: state.counter - 1 }),
    toggle: (state) => ({ ...state, visible: !state.visible })
  }
});

const counterReducer = counterSlice.reducer;

export const counterActions = counterSlice.actions;
export default counterReducer;