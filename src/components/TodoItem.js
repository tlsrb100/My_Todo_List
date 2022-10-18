import React from "react";
import styled from "styled-components";


const TodoItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3px 0;
`;

const DoneButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 0.1px solid #ccc;
  border-radius: 50%;
  background-color: transparent;
  font-size: 7px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const CheckBoxStyled = styled.img`
  width: 15px;
  height: 15px;
`;

const TopicStyled = styled.p`
  display: flex;
  align-items: center;
  width: 380px;
  height: 50px;
  padding: 0 10px;
  margin: 0 10px;
  border: 1px solid #ccc;
  font-size: 17px;
`;

const DeleteButtonStyled = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const DeleteImgStyled = styled.img`
  width: 30px;
  height: 30px;
`;



function TodoItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;

  return (
    <TodoItemStyled>
      <DoneButtonStyled onClick={() => onToggle(id)}>
        {checked ? <CheckBoxStyled src="/img/check.png" /> : null}
      </DoneButtonStyled>
      <TopicStyled
        style={{
          textDecoration: checked ? "line-through" : null,
          color: checked ? "#ccc" : "#000",
        }}
      >
        {text}
      </TopicStyled>
      <DeleteButtonStyled onClick={() => onRemove(id)}>
        <DeleteImgStyled src="/img/trash.png" />
      </DeleteButtonStyled>
    </TodoItemStyled>
  );
}


export default TodoItem;