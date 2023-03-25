import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostI } from "../../Types/defaultTypes";
import { posts } from "./db";

interface CatalogueState {
  posts: Array<PostI>;
}

const initialState = { posts } as CatalogueState;

const catlogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {
    createPost(state, action: PayloadAction<PostI>) {
      let currentPosts = state.posts;
      state.posts = [...currentPosts, action.payload];
    },
    deletePost(state, action: PayloadAction<number>) {
      let currentPosts = state.posts;
      currentPosts.filter((post) => post.code !== action.payload);
    },
  },
});

// [FIX]

// reducers: {
//   increment(state) {
//     state.value++;
//   },
//   decrement(state) {
//     state.value--;
//   },
//   incrementByAmount(state, action: PayloadAction<number>) {
//     state.value += action.payload;
//   },
// },

export const { createPost, deletePost } = catlogueSlice.actions;
export default catlogueSlice.reducer;
