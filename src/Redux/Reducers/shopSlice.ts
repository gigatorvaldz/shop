import { createSlice } from "@reduxjs/toolkit";

interface shopState {
  cartTotal: number;
  priceTotal: number;
}

const initialState = { cartTotal: 3, priceTotal: 12478 } as shopState;

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    cartIncrement(state) {
      state.cartTotal++;
    },
    cartDecrement(state) {
      state.cartTotal--;
    },
  },
});

export const { cartIncrement, cartDecrement } = shopSlice.actions;
export default shopSlice.reducer;
