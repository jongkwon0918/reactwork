import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import postsReducer from "../features/posts/postsSlice";
import memberReducer from "../features/member/memberSlice";
//데이터 저장소!
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    posts: postsReducer,
    members: memberReducer,
  },
});
