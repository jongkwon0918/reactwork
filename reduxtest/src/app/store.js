import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
//데이터 저장소!
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
