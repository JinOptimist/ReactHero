import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./heroReducer";

export const store = configureStore({
  reducer: {
    currentHero: heroReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
