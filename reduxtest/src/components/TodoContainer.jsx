import React from "react";
import TodoFilter from "./todo/TodoFilterComponent";
import TodoInput from "./todo/TodoInput";
import TodoList from "./todo/TodoList";

export default function TodoContainer() {
  return (
    <div>
      <TodoFilter />
      <TodoInput />
      <TodoList />
    </div>
  );
}
