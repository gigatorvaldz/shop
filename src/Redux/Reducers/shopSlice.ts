import { createSlice } from "@reduxjs/toolkit";

interface shopState {
  cartCount: number;
}

const initialState = { cartCount: 0 } as shopState;

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    cartIncrement(state) {
      state.cartCount++;
    },
    cartDecrement(state) {
      state.cartCount--;
    },
  },
});

export const { cartIncrement, cartDecrement } = shopSlice.actions;
export default shopSlice.reducer;
