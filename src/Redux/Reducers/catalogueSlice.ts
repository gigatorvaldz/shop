import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CatalogueState {
  value: number
}

const initialState = { value: 0 } as CatalogueState;

const catlogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  catlogueSlice.actions;
export default catlogueSlice.reducer;
