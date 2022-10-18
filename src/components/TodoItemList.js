import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoItemListStyeld = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px 10px;
  height: 460px;
  overflow: scroll;
`;


function TodoItemList({ todos, onRemove, onToggle }) {
  return (
    <TodoItemListStyeld>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoItemListStyeld>
  );
}

export default TodoItemList;