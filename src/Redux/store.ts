import { configureStore } from "@reduxjs/toolkit";
import catalogue from "./Reducers/catalogueSlice";
import shop from "./Reducers/shopSlice";
export const store = configureStore({
  reducer: {
    catalogue,
    shop
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
